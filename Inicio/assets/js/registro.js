/* Tendremos que evaluar que las contraseñas sean iguales, tal vez con un if */
const d=document;
const alertPlaceholder = d.getElementById('liveAlert');
const alertPlaceholder2 = d.getElementById('liveAlert2');
const $form = d.querySelector(".form-control"),
    $inputs=d.querySelectorAll(".form-control[required]");
    var message;
    console.log($inputs);
let contador=0;
$inputs[4].addEventListener("click",()=>{elegir(4)})

const alertTrigger = document.getElementById('sendMessageButton')
    alertTrigger.addEventListener('click', () => {
            pass=d.getElementById("password").value;
            pass1=d.getElementById("password_repeat").value;
            if (pass!=pass1) {
               
                   elegir(5);
               
               
                  } else{
                
            }
    } )

    
  function elegir(inputnum) {
    
    const inputnumero=inputnum
      const wrapper = document.createElement('div')
      if (inputnumero==5) {
        message= "Las contraseñas no coinciden";
      }else{
        message= $inputs[inputnumero].title;
      }
    
     wrapper.innerHTML = [
    `<div class="alert alert-warning" role="alert">`,
    `   <div>${message}</div>`,
     '</div>'
    ].join('')
    console.log("hola");
    if (inputnumero===5) {
      alertPlaceholder2.append(wrapper)
      console.log(inputnum);
      } else if (inputnumero===4) {
      alertPlaceholder.append(wrapper)
      } else {
        console.log("error");
      } 

};
/*
d.addEventListener("keyup",(e)=>{
    if (e.target.matches(".form-control[required]")) {
        let $inputs=e.target,
        pattern=$inputs.pattern;
        if (pattern) {
            console.log("bien")
            let REGEX=new RegExp(pattern);
            return !REGEX.exec($inputs.value)
        } 
        if (!pattern) {
            console.log("nEGATIVO");
        }
    }
})
*/