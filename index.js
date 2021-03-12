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
    let fname = document.createElement("td");
    fname.textContent = element.first_name;
    let email = document.createElement("td");
    email.textContent = element.email;
    let photo = document.createElement("td");
    let img = document.createElement("img");
    img.src = element.photo;
    img.width = 110;
    img.height = 80;
    photo.appendChild(img);

    row.appendChild(lname);
    row.appendChild(fname);
    row.appendChild(email);
    row.appendChild(photo);

    tableBody.appendChild(row);
  });
}

[].forEach.call(headers, function (header, index) {
  header.addEventListener("click", function () {
    sortTable(index);
  });
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

function ingresarElemento() {
  let row = document.createElement("tr");
  let lname = document.createElement("td");
  lname.textContent = document.getElementById("inLastName");
  let fname = document.createElement("td");
  fname.textContent = document.getElementById("inFirstName");
  let email = document.createElement("td");
  email.textContent = document.getElementById("inEmail");
  let photo = document.createElement("td");
  let img = document.createElement("img");
  img.src = document.getElementById("inPhoto");
  img.width = 110;
  img.height = 80;
  photo.appendChild(img);

  row.appendChild(lname);
  row.appendChild(fname);
  row.appendChild(email);
  row.appendChild(photo);

  tableBody.appendChild(row);
  console.log("Hello");
}
