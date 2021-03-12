let requestURL = "./data.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
const table = document.querySelector("table");
const tableBody = document.getElementById("tbody");
const headers = table.querySelectorAll("th");

request.onload = function () {
  if (request.status == 200) {
    const datos = Array.from(request.response);
    createTable(datos);
  }
};

function createTable(datos) {
  datos.forEach((element) => {
    let row = document.createElement("tr");
    let lname = document.createElement("td");
    lname.textContent = element.last_name;
    lname.contentEditable = "true";
    let fname = document.createElement("td");
    fname.textContent = element.first_name;
    fname.contentEditable = "true";
    let email = document.createElement("td");
    email.textContent = element.email;
    email.contentEditable = "true";
    let photo = document.createElement("td");
    let img = document.createElement("img");
    img.src = element.photo;
    img.width = 110;
    img.height = 80;
    photo.appendChild(img);
    photo.contentEditable = "true";
    let deltd = document.createElement("td");
    let deletebtn = document.createElement("button");
    deletebtn.className = "btn btn-default";
    deletebtn.type = "button";

    let delimg = document.createElement("img");
    delimg.src =
      "https://fixmywp.com/wp-content/uploads/2013/07/mass-delete-wordpress-comments.png";
    delimg.height = 30;
    delimg.width = 50;
    deletebtn.appendChild(delimg);
    deltd.appendChild(deletebtn);

    row.appendChild(lname);
    row.appendChild(fname);
    row.appendChild(email);
    row.appendChild(photo);
    row.appendChild(deltd);

    row.querySelector("Button").addEventListener("click", function () {
      row.remove();
    });

    tableBody.appendChild(row);
  });
}

[].forEach.call(headers, function (header, index) {
  header.addEventListener("click", function () {
    sortTable(index);
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let row = document.createElement("tr");
  let lname = document.createElement("td");
  lname.textContent = document.getElementById("inLastName").value;
  let fname = document.createElement("td");
  fname.textContent = document.getElementById("inFirstName").value;
  let email = document.createElement("td");
  email.textContent = document.getElementById("inEmail").value;
  let photo = document.createElement("td");
  let img = document.createElement("img");
  img.src = document.getElementById("inPhoto").value;
  img.width = 110;
  img.height = 80;
  photo.appendChild(img);
  let deltd = document.createElement("td");
  let deletebtn = document.createElement("button");
  deletebtn.className = "btn btn-default";
  deletebtn.type = "button";

  let delimg = document.createElement("img");
  delimg.src =
    "https://fixmywp.com/wp-content/uploads/2013/07/mass-delete-wordpress-comments.png";
  delimg.height = 30;
  delimg.width = 50;
  deletebtn.appendChild(delimg);
  deltd.appendChild(deletebtn);

  row.appendChild(lname);
  row.appendChild(fname);
  row.appendChild(email);
  row.appendChild(photo);
  row.appendChild(deltd);

  row.querySelector("Button").addEventListener("click", function () {
    row.remove();
  });

  tableBody.appendChild(row);
});

function sortTable(index) {
  let rows, sorted, i, x, y, sortFlag;
  sorted = true;
  while (sorted) {
    sorted = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      sortFlag = false;
      x = rows[i].getElementsByTagName("TD")[index];
      y = rows[i + 1].getElementsByTagName("TD")[index];
      sortFlag = true;
      if (x.innerHTML > y.innerHTML) {
        break;
      }
    }
    if (sortFlag) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      sorted = true;
    }
  }
}
