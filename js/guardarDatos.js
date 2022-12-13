let inputId = document.getElementById('id');
let inputName = document.getElementById('name');
let inputBirthday = document.getElementById('birthday');
let inputEmail = document.getElementById('email');
let imputCity = document.getElementById('city');
let btn = document.querySelector('#botonGuardar');

btn.addEventListener('click', addUser);

function addUser() {
  let tr = document.createElement('tr');
  let tdId = document.createElement('td');
  let tdName = document.createElement('td');
  let tdBirthday = document.createElement('td');
  let tdEmail = document.createElement('td');
  let tdCity = document.createElement('td')
  let tdAccion = document.createElement('td')

  let btnModificar = document.createAttribute(<a  class="btn btn-warnig btn-sm" role="button"> Modificar</a>);
  let btnEliminar  = document.createAttribute(<a  class="btn btn-sm btn-danger" role="button">Eliminar</a>);
  
  tdAccion.appendChild(btnModificar);
  tdAccion.appendChild(btnEliminar);

  tdId.innerText = inputId;
  tdName.innerText = inputName.value;
  tdBirthday.innerText = inputBirthday.value;
  tdEmail.innerText = inputEmail;
  tdCity.innerText = imputCity;

  let tbody = document.getElementById('tableDatos');
  tbody.appendChild(tr);
  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdBirthday);
  tr.appendChild(tdEmail);
  tr.appendChild(tdCity);
  tr.appendChild(tdAccion)
  
}