const { createElement } = require("react");

const inscriptForm = document.getElementById("formulaire-inscription");
const btnInscript = document.getElementById("btnInscript");

inscriptForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const data = {
        pseudo : document.getElementById("pseudo-inscript").value,
        prenom : document.getElementById("prenom-inscript").value,
        nom : document.getElementById("nom-inscript").value,
        email : document.getElementById("email-inscript").value,
        password : document.getElementById("password-inscript").value,
        error : document.getElementById(".error").value,
        titre : document.getElementById("titre").value
    }

    try {
        const response = await fetch('/JSON/fetch.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);

    } catch(err) {
        errorDiv.textContent = `Erreur : `
    }
})

const connectForm = document.getElementById("formulaire-connection");
const btnConnect = document.getElementById("connectBtn");

connectForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const data = {
        pseudo : document.getElementById("pseudo-inscript").value,
        email : document.getElementById("email-inscript").value,
        password : document.getElementById("password-inscript").value,
        error : document.getElementById(".error").value,
        titre : document.getElementById("titre").value
    }
    
    try {
        const response = await fetch('/JSON/fetch.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);

    } catch(err) {
        errorDiv.textContent = `Erreur : `
    }

    
});

const saveProfil = document.getElementById("enregistrementProfil");

saveProfil.addEventListener('', async (e)=> {
    e.preventDefault();

    try {
        const response = await fetch('/JSON/fetch.json');
        if(!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} (${response.statusText}) `);
        }
    
    const data = await response.json();

    enregistrementProfil.innerHTML = `
        <p>Le compte a été enregistré sous le pseudonyme ${data.pseudo}</p>
        <a href="connexion.html" class="connectBtn">Se connecter</a> 
    `
    } catch(err) {
        errorDiv.textContent = `Erreur : `
    }

});

const profilDiv = document.getElementById("profilInformation");
const listInfo = document.getElementById("listInfo")

profilDiv.addEventListener('submit', async (e)=> {
    e.preventDefault();

    try {
        const response = await fetch('/JSON/user.json');
        if(!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} (${response.statusText}) `);
        }

        const profils = await response.json();

        profils.forEach (profil => {
            const pseudo = document.createElement("li")
            pseudo.textContent = `Pseudo: ${profil.pseudo}`

            const prenom = document.createElement("li")
            prenom.textContent = `Prénom: ${profil.prenom}`

            const nom = document.createElement("li")
            nom.textContent = `Nom: ${profil.nom}`

            const email = document.createElement("li")
            email.textContent = `E-mail: ${profil.email}`

            listInfo.appendChild(pseudo, prenom, nom, email)

        })

        
    }catch(err) {
        errorDiv.textContent = `Erreur : `
    }
});