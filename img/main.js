const names = document.querySelector('#InputNombres');
const email = document.querySelector('#InputEmail');
const telefono = document.querySelector('#InputTelefono');
const empresa = document.querySelector('#InputEmpresa');
const pais = document.querySelector('#InputPais');
const sector = document.querySelector('#InputSector');
const cb = document.querySelector('#checkBox1');
console.log('Aqui 1')
//console.log(checkBox.checked)

//const grecaptcha = document.querySelector('#grecaptcha');
//const asunto = document.querySelector('#InputAsunto');
//const textarea2 = document.querySelector('#Textarea2');
//console.log(names)

const namesError = document.querySelector('#nombresError');
const emailError = document.querySelector('#emailError');
const telefonoError = document.querySelector('#telefonoError');
const empresaError = document.querySelector('#empresaError');
const paisError = document.querySelector('#paisError');
const sectorError = document.querySelector('#sectorError');
const grecaptchaError = document.querySelector('#grecaptchaError');
const checkError = document.querySelector('#checkError');
//const asuntoError = document.querySelector('#asuntoError');
//const textarea2Error = document.querySelector('#textarea2Error');

const button = document.querySelector('#button3');

button.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(cb.checked);
    //event.preventDefault();
    //console.log(event);
    validateEmpty(names.value, names, namesError, "Los nombres no pueden estar vacíos", event);
    
    //validateEmail(email.value, email, emailError, "El email no puede estar vacío");
    validateEmail(email.value, email, emailError, "El email no es válido", event);
    
    validateEmpty(telefono.value, telefono, telefonoError, "El telefono no puede estar vacío", event);
    validateEmpty(empresa.value, empresa, empresaError, "EL nombre de la empresa no puede estar vacío", event);
    validateEmpty(pais.value, pais, paisError, "EL nombre del pais no puede estar vacío", event);
    validateEmpty(sector.value, sector, sectorError, "EL nombre del sector no puede estar vacío", event);
    //validateCheckBox(checkBox, checkError, "Debe aceptar nuestra politica", event);
    validateCheckBox(checkBox, event);
    //validateEmpty(asunto.value, asunto, asuntoError, "EL asunto no puede estar vacío", event);
    //validateEmpty(textarea2.value, textarea2, textarea2Error, "Debe escribir un mensaje", event);

    validateRecaptcha(grecaptcha, grecaptchaError,"Tiene que marcar el recaptcha!")
    /*
    if(grecaptcha && grecaptcha.getResponse().length > 0)
    {
        //the recaptcha is checked
        // Do what you want here
        alert('Well, recaptcha is checked !');
    }
    else
    {
        //The recaptcha is not cheched
        //You can display an error message here
        event.preventDefault();
        alert('Oops, you have to check the recaptcha !');
        
    }
    */
});
function validateCheckBox(checkBox, event){
    event.preventDefault();
    console.log('Entre')
    console.log(checkBox.checked)
    if(!checkBox.checked)
    {
        alert('You must agree to the terms first.');
        return false;
    }
}

function validateRecaptcha(grecaptcha, grecaptchaError, mensajeError){
    if(grecaptcha && grecaptcha.getResponse().length > 0)
    {
        //the recaptcha is checked
        // Do what you want here
        //alert('Well, recaptcha is checked !');
        hideErrorCaptcha(grecaptchaError, mensajeError);
    }
    else
    {
        //The recaptcha is not cheched
        //You can display an error message here
        event.preventDefault();
        //alert('Oops, you have to check the recaptcha !');
        showErrorCaptcha(grecaptchaError, mensajeError);
        
    }
}

function validateEmail(valueInput, divInput, divError, mensajeError, event){
    //Regular expresions
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    //console.log(regExp.test(valueInput))
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    }else{
        event.preventDefault();

        //console.log(checkBox.checked)

        showError(divInput, divError, mensajeError);
    }
}

function validateEmpty(valueInput, divInput, divError, mensajeError, event){
    //console.log(valueInput.length)
    if(valueInput.length == 0){
        event.preventDefault();
        showError(divInput, divError, mensajeError);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, mensajeError){
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<i class="fa-solid fa-circle-exclamation error_icon"></i>
    <p class="error">${mensajeError}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid #ced4da';
    divError.innerHTML = ``;
}

function showErrorCaptcha(divError, mensajeError){
    divError.innerHTML = `<p class="error">${mensajeError}</p>`;
}

function hideErrorCaptcha(divError){
    divError.innerHTML = ``;
}
