const d=document;
const formularioGET=d.getElementById('formGetUsuario');
var id=1;
const urlGet=`http://localhost:8080/usuarios/${id}`;
const nameUsuario=d.getElementById('nameUser');
const nombreCompleto=d.getElementById('NombreCompleto');
const email=d.getElementById('email');
const contrasenia=d.getElementById('password');
const domicilio=d.getElementById('Domicilio');
const cp=d.getElementById('cp');
const tel=d.getElementById('tel');
const password=d.getElementById('password')


    fetch(urlGet,{
        withCredentials: true,  
        crossorigin: true,  
        mode: 'no-cors',     
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        method:'GET',

    }).then((response)=> response.json()).then((data)=>{
        nameUsuario.textContent=String(data.nombreUsuario);
        console.log(data.nombreUsuario);
        nombreCompleto.value=String(data.nombre);
    })
    .catch(()=>{
        //console.error("Error: ",error);
    });



