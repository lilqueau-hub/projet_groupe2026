const inscriptForm = document.getElementById("formulaire-inscription");
const inscriptPseudo = document.getElementById("pseudo-inscript");
const inscriptPrenom = document.getElementById("prenom-inscript");
const inscriptNom = document.getElementById("nom-inscript");
const inscriptEmail = document.getElementById("email-inscript");
const inscriptPassword = document.getElementById("password-inscript");
const inscriptError = document.getElementById(".error");
const inscriptTitre = document.getElementById("titre");

connectForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inscriptPrenomValue = inscriptPrenom.value;
    const inscriptNomValue = inscriptNom.value;
    const inscriptPseudoValue = inscriptPseudo.value;
    const inscriptEmailValue = inscriptEmail.value;
    const inscriptPasswordValue = inscriptPassword.value;
    messageError.forEach(error=>{
        error.classList.add('invisible');
    });

    if(inscriptPrenomValue.length < 2 || inscriptPrenomValue.length > 10){
        inscriptPrenomValue.nextElementSibling.classList.remove('invisible');
    } else if (inscriptNomValue.length < 2 || inscriptNomValue.length > 10){
        inscriptNomValue.nextElementSibling.classList.remove('invisible');
    } else if (inscriptPseudoValue.length < 2 || inscriptPseudoValue.length > 10){
        inscriptPseudoValue.nextElementSibling.classList.remove('invisible');
    } else if (inscriptEmailValue.length < 2 || inscriptEmailValue.length > 10){
        inscriptEmailValue.nextElementSibling.classList.remove('invisible');
    } else if (inscriptPasswordValue.length < 2 || inscriptPasswordValue.length > 10){
        inscriptPasswordValue.nextElementSibling.classList.remove('invisible');
    } else {

    }
})


const connectForm = document.getElementById("formulaire-connection");
const connectPseudo = document.getElementById("pseudo-connect");
const connectEmail = document.getElementById("email-connect");
const connectPassword = document.getElementById("password-connect");

connectForm.addEventListener('', (e)=>{
    e.preventDefault();

    const connectPseudoValue = connectPseudo.value;
    const connectEmailValue = connectEmail.value;
    const connectPassword = connectPassword.value;
    messageError.forEach(error=>{
        error.classList.add('invisible');
    });

    if(connectPseudoValue.length < 2 || connectPseudoValue.length > 10){
        connectPseudoValue.nextElementSibling.classList.remove('invisible');
    } else if (connectEmailValue.length < 2 || connectEmailValue.length > 10){
        connectEmailValue.nextElementSibling.classList.remove('invisible');
    } else if (connectPassword.length < 2 || connectPassword.length > 10){
        connectPassword.nextElementSibling.classList.remove('invisible');
    } 
})
