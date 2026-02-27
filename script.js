const inscriptForm = document.getElementById("formulaire-inscription");

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
        const response = await fetch('http://localhost:8000/api/register', {
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
        const response = await fetch('http://localhost:8000/api/register', {
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


const profilDiv = document.getElementById("profilInformation");
const profilForm = document.getElementById("profilList");

profilForm.addEventListener('submit', async (e)=> {
    e.preventDefault();

    try {
        const response = await fetch('');
        if(!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status} (${response.statusText}) `);
        }

        const data = await response.json();

        profilDiv.innerHTML = `
            <p>Pseudonyme: ${data.pseudo} </p>
            <p>Prénom: ${data.prenom} </p>
            <p>Nom: ${data.nom} </p>
            <p>E-mail: ${data.email} </p>
            <p>Numéro de téléphone: ${data} </p>        
        `
    }catch(err) {
        errorDiv.textContent = `Erreur : `
    }
});