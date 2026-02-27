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

profilDiv.addEventListener('submit', async (e)=> {
    e.preventDefault();

    try {
        const response = await fetch('/JSON/fetch.json');
        if(!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} (${response.statusText}) `);
        }

        const data = await response.json();

        profilInformation.innerHTML = `
            <p>Pseudonyme: ${data.pseudo} </p>
            <p>Prénom: ${data.prenom} </p>
            <p>Nom: ${data.nom} </p>
            <p>E-mail: ${data.email} </p>   
        `
    }catch(err) {
        errorDiv.textContent = `Erreur : `
    }
});