"use strict";
document.addEventListener("DOMContentLoaded", () => {
    /**************comunicacion api ************** */
    //
   let url = "https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees";
    async function mostrarData() {
        let res = await fetch(url)
        let data = await res.json();
        data.forEach(e => {
            let fechaActual = new Date();
            fechaActual = e.birthday.value;
            document.querySelector("#tableDatos").innerHTML +=
      
               `    <td class="id">  ${e.id} </td>
                    <td> ${e.name} </td> 
                    <td> ${fechaActual.toDateString()} </td> 
                    <td> ${e.email} </td>                     
                    <td> ${e.city} </td> 
                    <td>
                        <a  class="btn btn-sm btn-warning" data-toggle="modal" data-target="#ModalEditar" role="button"> Modificar</a>
                        <a  class="btn btn-sm btn-danger" role="button">Eliminar</a>
                    </td>
                    <td>
                        
                   </td>
               `        
        });
    }
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
    let btnModificar = document.createElement('a');
    let btnEliminar = document.createElement('a')

    
    tdId.innerText = inputId.value;
    tdName.innerText = inputName.value;
    tdBirthday.innerText = inputBirthday.value;
    tdEmail.innerText = inputEmail.value;
    tdCity.innerText = imputCity.value;

    btnModificar.setAttribute("role"," button");
    btnEliminar.setAttribute("role"," button");
    btnModificar.setAttribute("class"," btn btn-sm btn-warning ");
    btnEliminar.setAttribute("class"," btn btn-sm btn-danger ml-1");
    btnModificar.setAttribute("data-toggle","modal");
    btnModificar.setAttribute("data-target","#ModalEditar");

    btnModificar.innerText = "Modificar";
    btnEliminar.innerText = "Eliminar";
    tdAccion.appendChild(btnModificar);
    tdAccion.appendChild(btnEliminar);
    
    let tbody = document.getElementById('tableDatos');
    tbody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdBirthday);
    tr.appendChild(tdEmail);
    tr.appendChild(tdCity);
    tr.appendChild(tdAccion)
    
    }
    mostrarData();
});