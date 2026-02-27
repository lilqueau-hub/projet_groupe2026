











let fetchTest = async () => {
    let data = await fetch('/JSON/fetch.json');
    let res = await data.json();
    let results = await res.results;

    return results;
}



const ajout = document.querySelector(".btn-ajout");

const ViderList = () => {
    const tableau = document.querySelector(".tbody");
    tableau.innerHTML = "";
}
const afficher_list = async () => {
const results = await fetchTest();

    const tableau = document.querySelector(".tbody");
    let noms_entreprises = [];
    let postes = [];
    let statuts = [];
    let dates = [];

    for (let i = 0; i < results.length; i++){
        noms_entreprises.push(results[i].nom_entreprise);
        postes.push(results[i].poste_vise);
        statuts.push(results[i].statut);
        dates.push(results[i].date_envoi);
    }

    const length = noms_entreprises.length
    for (let i = 0; i < length ; i++){
        const nom_entreprise = noms_entreprises[i];
        const poste = postes[i];
        const statut = statuts[i];
        const date = dates[i];

        const tr = document.createElement("tr");

        // Se transformera en input au click
        const td_nom_entreprise = document.createElement("td");
        const td_poste = document.createElement("td");
        const td_statut = document.createElement("td");
        const td_date = document.createElement("td");
        const td_relance = document.createElement("td");
        const td_btn = document.createElement("td");
        const btn = document.createElement("button");
        const a = document.createElement("a");

        td_nom_entreprise.name = "entreprise";
        td_poste.name = "poste";
        td_statut.name = "statut";
        td_date.name = "date";
        td_relance.name = "relance";
        a.href = "detail.html";

        td_nom_entreprise.textContent = nom_entreprise;
        td_poste.textContent = poste;
        td_statut.textContent = statut;
        td_date.textContent = addDays(date, 0);
        td_relance.textContent = addDays(date, 7);
        td_btn.className = "td-btn";
        btn.textContent = "+";
        btn.className = "btn-modif";

        a.appendChild(btn)
        td_btn.appendChild(a);
        tr.id = i;
        tr.append(td_nom_entreprise, td_poste, td_statut, td_date, td_relance, td_btn);
        tableau.appendChild(tr);

        // Se transforme en input au click
        inputs = [td_nom_entreprise, td_poste, td_statut, td_date, td_relance];
        inputs.forEach(input => {
            input.addEventListener("click", (e)=>{
                e.preventDefault()
                const input_entreprise = document.createElement("input");
                const input_poste = document.createElement("input");
                const input_statut = document.createElement("input");
                const input_date = document.createElement("input");

                input_entreprise.value = nom_entreprise
                input_poste.value = poste;
                input_statut.value = statut;
                input_date.value = date;

                input_entreprise.type = "text";
                input_poste.type = "text";
                input_statut.type = "text";
                input_date.type = "date";

                td_nom_entreprise.appendChild(input_entreprise);
                td_poste.appendChild(input_poste);
                td_statut.appendChild(input_statut);
                td_date.appendChild(input_date);
                switch(input.name){
                    case "entreprise":
                        noms_entreprises[i] = input_entreprise.value;
                        postes[i] = input_poste.value;
                        statuts[i] = input_statut.value;
                        dates[i] = input_date.value;
                        // ...
                }
                localStorage.setItem("noms_entreprises", JSON.stringify(noms_entreprises));
                localStorage.setItem("postes", JSON.stringify(postes));
                localStorage.setItem("statuts", JSON.stringify(statuts));
                localStorage.setItem("dates", JSON.stringify(dates));   
                
            });
            input.addEventListener("keydown", (e) => {
                e.preventDefault();
                if (e.key === 'Enter') {
                    ViderList();
                    afficher_list();
                }
            })}
        )
    }
}

const addDays = (date, days) => {

    const tempDate = new Date(date);
    const newDate = tempDate.setDate(tempDate.getDate() + days)
    console.log(newDate);
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
    const a = document.createElement("a");

    td_nom_entreprise.name = "entreprise";
    td_poste.name = "poste";
    td_statut.name = "statut";
    td_date.name = "date";
    td_relance.name = "relance";
    a.href = "detail.html";

    td_nom_entreprise.textContent = nom_entreprise;
    td_poste.textContent = poste;
    td_statut.textContent = statut;
    td_date.textContent = addDays(date, 0);
    td_relance.textContent = addDays(date, 7);
    td_btn.className = "td-btn";
    btn.textContent = "+";
    btn.className = "btn-modif";

    a.appendChild(btn)
    td_btn.appendChild(a);
    tr.append(td_nom_entreprise, td_poste, td_statut, td_date, td_relance, td_btn);
    tableau.appendChild(tr);

    let noms_entreprises = [];
    let postes = [];
    let statuts = [];
    let dates = [];
    for (let i = 0; i < results.length; i++){
        noms_entreprises.push(results[i].nom_entreprise);
        postes.push(results[i].poste_vise);
        statuts.push(results[i].statut);
        dates.push(results[i].date_envoi);
    }

    tr.id = noms_entreprises.length;

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