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


    
})


const connectForm = document.getElementById("formulaire-connection");
const connectPseudo = document.getElementById("pseudo-connect");
const connectEmail = document.getElementById("email-connect");
const connectPassword = document.getElementById("password-connect");
const btnConnect = document.getElementById("connectBtn");

connectForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const connectPseudoValue = connectPseudo.value;
    const connectEmailValue = connectEmail.value;
    const connectPasswordValue = connectPassword.value;
    
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

    
})

// form.addEventListener('submit', async (e)=> {
//     e.preventDefault();

//     const cityName = document.getElementById('city').value.trim();
//     if(!cityName) return;
    
//     errorDiv.innerHTML = '';
//     weatherDiv.innerHTML = '';

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`);

//         if(!response.ok) {
//             throw new Error(`Erreur HTTP: ${response.status} (${response.statusText}) `);
//         }

//         const data = await response.json();

//         weatherDiv.innerHTML = `
//             <h2>Météo à ${data.name} (${data.sys.country})</h2>
//             <p>Température : ${data.main.temp}°C</p>
//             <p>Humidité : ${data.main.humidity}%</p>
//         `
//     } catch(err) {
//         errorDiv.textContent = `Erreur : `
//     }
// });

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

        profilDiv.innerHTML = `è
            
        
        `
    }
})

// const form = document.getElementById('weatherForm');
// const errorDiv = document.getElementById('error');
// const weatherDiv = document.getElementById('weather');

// const API_KEY = '33b3d10fe54defa518c4da503320deaa';

// form.addEventListener('submit', async (e)=> {
//     e.preventDefault();

//     const cityName = document.getElementById('city').value.trim();
//     if(!cityName) return;
    
//     errorDiv.innerHTML = '';
//     weatherDiv.innerHTML = '';

//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`);

        
//         const data = await response.json();

//         weatherDiv.innerHTML = `
//             <h2>Météo à ${data.name} (${data.sys.country})</h2>
//             <p>Température : ${data.main.temp}°C</p>
//             <p>Humidité : ${data.main.humidity}%</p>
//         `
//     } catch(err) {
//         errorDiv.textContent = `Erreur : `
//     }
// });