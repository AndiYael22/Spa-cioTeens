const d=document;
const formularioGET=d.getElementById('formGetUsuario');
var id=25;
const urlGet=`https://pokeapi.co/api/v2/berry/${id}/`;
const nameUsuario=d.getElementById('nameUser');
const nombreCompleto=d.getElementById('NombreCompleto');

function metodoGet(urlGet) {
    fetch(urlGet,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    .then((response)=> response.json())
    .then((data)=>{
        d.textContent=data.firmness;
        nameUsuario.textContent=String(data.firmness.name);
        nombreCompleto.value=data.firmness.name;
    })
    .catch(()=>{
        console.error("Error: ",error);
    });
}

metodoGet(urlGet);
