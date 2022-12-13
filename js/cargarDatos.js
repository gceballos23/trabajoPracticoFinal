let inputName = document.getElementById('name');
let inputSurname = document.getElementById('surname');
let btn = document.querySelector('.btn');

btn.addEventListener('click', addUser);

function addUser() {
  let tr = document.createElement('tr');
  let tdName = document.createElement('td');
  let tdSurname = document.createElement('td');
  let td

  tdName.innerText = inputName.value;
  tdSurname.innerText = inputSurname.value;

  let tbody = document.getElementById('tab');
  tbody.appendChild(tr);
  tr.appendChild(tdName);
  tr.appendChild(tdSurname);
}