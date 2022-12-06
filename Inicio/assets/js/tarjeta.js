function validarTarjetas(){
  
  
    visa = document.getElementById("NumeroDeTarjeta").value;
    mastercard = document.getElementById("NumeroDeTarjeta").value;
       
    visa_error = "";
    mastercard_error = "";     
       
    if (!visa.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/))
      visa_error = "No es un número de Visa correcto";
    
    
    if (!mastercard.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/))
        mastercard_error = "No es un número de Mastercard correcto";
    
    document.getElementById("visa_error").innerHTML = visa_error;
    document.getElementById("mastercard_error").innerHTML = mastercard_error;
     
    
    }