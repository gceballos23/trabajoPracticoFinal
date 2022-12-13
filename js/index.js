"use strict";
document.addEventListener("DOMContentLoaded", () => {
    /**************comunicacion api ************** */
    //
   let url = "https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees";
    async function mostrarData() {
        let res = await fetch(url)
        let data = await res.json();
        data.forEach(e => {
            document.querySelector("#tableDatos").innerHTML +=

        
               `    <td class="id">  ${e.id} </td>
                    <td> ${e.name} </td> 
                    <td> ${e.birthday} </td> 
                    <td> ${e.email} </td>                     
                    <td> ${e.city} </td> 
                    <td>
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#ModalEditar">Modificar</button>
                        <button class="btn btn-sm btn-danger" id="botonBorrar">Borrar</button>
                    </td>
                `                
        });
/*
        let tr = document.querySelectorAll("td.id");
        tr.forEach(item => {
            item.addEventListener("mouseover", (e) => {
                document.querySelector("section.img img").classList.remove("oculto");
                let url2 = `${url}/${(e.target.innerHTML).trim()}`;
                cargarImg(url2);
            })
        })

        async function cargarImg(p) {
            let resp = await fetch(p)
            let dato = await resp.json();
            document.querySelector("section.img img").src = `${dato.image}`;
        } */
    }
    mostrarData();
})