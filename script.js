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
    }
})

//     if(prenomValue.length < 2 || prenomValue.length > 10){
//        monPrenom.nextElementSibling.classList.remove('invisible');
//     } else if(nomValue.length < 3 || nomValue.length > 15){
//         monNom.nextElementSibling.classList.remove('invisible');
//     } else if (messageValue.length < 10 || messageValue.length > 100){
//         monMessage.nextElementSibling.classList.remove('invisible');
//     }else{
//         monTitre.innerText = "Votre message a bien été envoyé.";
//         monForm.remove();
//     }
// })
