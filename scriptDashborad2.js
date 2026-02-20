const ajout = document.querySelector(".btn-ajout");

const afficher_list = () => {
    const tableau = document.querySelector(".tbody");
    let noms_entreprises = [];
    let postes = [];
    let statuts = [];
    let dates = [];
    if (localStorage.getItem("noms_entreprises")){
        noms_entreprises = JSON.parse(localStorage.getItem("noms_entreprises"));
        postes = JSON.parse(localStorage.getItem("postes"));
        statuts = JSON.parse(localStorage.getItem("statuts"));
        dates = JSON.parse(localStorage.getItem("dates"));
    }

    const length = noms_entreprises.length
    for (let i = 0; i < length ; i++){
        const nom_entreprise = noms_entreprises[i];
        const poste = postes[i];
        const statut = statuts[i];
        const date = dates[i];

        const tr = document.createElement("tr");

        const td_nom_entreprise = document.createElement("td");
        const td_poste = document.createElement("td");
        const td_statut = document.createElement("td");
        const td_date = document.createElement("td");
        const td_relance = document.createElement("td");
        const td_btn = document.createElement("td");
        const btn = document.createElement("button");

        td_nom_entreprise.textContent = nom_entreprise;
        td_poste.textContent = poste;
        td_statut.textContent = statut;
        td_date.textContent = date;
        td_relance.textContent = addDays(date, 7);
        td_btn.className = "td-btn";
        btn.textContent = "+";
        btn.className = "btn-modif";

        td_btn.appendChild(btn);
        tr.append(td_nom_entreprise, td_poste, td_statut, td_date, td_relance, td_btn);
        tableau.appendChild(tr);
    }
}

const addDays = (date, days) => {
    const tempDate = new Date(date.split('/').reverse().join('-'));
    const newDate = tempDate.setDate(tempDate.getDate() + days)
    console.log(newDate);
    // newDate.
    return new Date(newDate).toLocaleDateString();
}

afficher_list();

ajout.addEventListener("click", (e) =>{
    e.preventDefault();
    const tableau = document.querySelector(".tbody");

    const nom_entreprise = document.querySelector("#nom-entreprise").value;
    const poste = document.querySelector("#poste").value;
    const statut = document.querySelector("#statut").value;
    const date = document.querySelector("#date").value;

    const tr = document.createElement("tr");

    const td_nom_entreprise = document.createElement("td");
    const td_poste = document.createElement("td");
    const td_statut = document.createElement("td");
    const td_date = document.createElement("td");
    const td_relance = document.createElement("td");
    const td_btn = document.createElement("td");
    const btn = document.createElement("button");

    td_nom_entreprise.textContent = nom_entreprise;
    td_poste.textContent = poste;
    td_statut.textContent = statut;
    td_date.textContent = date;
    td_relance.textContent = addDays(date, 7);
    td_btn.className = "td-btn";
    btn.textContent = "+";
    btn.className = "btn-modif";

    td_btn.appendChild(btn);
    tr.append(td_nom_entreprise, td_poste, td_statut, td_date, td_relance, td_btn);
    tableau.appendChild(tr);

    let noms_entreprises = [];
    let postes = [];
    let statuts = [];
    let dates = [];
    if (localStorage.getItem("noms_entreprises")){
        noms_entreprises = JSON.parse(localStorage.getItem("noms_entreprises"));
        postes = JSON.parse(localStorage.getItem("postes"));
        statuts = JSON.parse(localStorage.getItem("statuts"));
        dates = JSON.parse(localStorage.getItem("dates"));
    }

    noms_entreprises.push(nom_entreprise);
    postes.push(poste);
    statuts.push(statut);
    dates.push(date);

    localStorage.setItem("noms_entreprises", JSON.stringify(noms_entreprises));
    localStorage.setItem("postes", JSON.stringify(postes));
    localStorage.setItem("statuts", JSON.stringify(statuts));
    localStorage.setItem("dates", JSON.stringify(dates));

    // localStorage.setItem("noms_entreprises",[]);
    // localStorage.setItem("postes", []);
    // localStorage.setItem("statuts", []);
    // localStorage.setItem("dates", []);

})