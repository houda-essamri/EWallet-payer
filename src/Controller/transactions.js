const user = JSON.parse(sessionStorage.getItem("currentUser"));

const choix = document.getElementById("choix");
const Recherche = document.getElementById("Recherche");
const tbody = document.getElementById("tbody");

choix.addEventListener("click", flitrerTransactions);


function createRow(element){
    const ligne = document.createElement("tr");
    const columnDate = document.createElement("td");
    const columnDescription = document.createElement("td");
    const columnType = document.createElement("td");
    const columnMontant = document.createElement("td");

    ligne.appendChild(columnDate);
    ligne.appendChild(columnDescription);
    ligne.appendChild(columnType);
    ligne.appendChild(columnMontant);


    columnDate.textContent = element.date;
    columnDescription.textContent = element.title;
    columnType.textContent = element.type;
    columnMontant.textContent = element.amount;
    
    tbody.appendChild(ligne);
}


function flitrerTransactions(){
    tbody.innerHTML = "";
    if(user.Transactions.length !== 0){
        if(choix.value === "Toutes"){
            user.Transactions.forEach((element) => {
            createRow(element);
            });
        }else if(choix.value === "Sorties"){
            let tab = user.Transactions.filter((n)=>n.type === "-");
            tab.forEach((element) => {
            createRow(element);
            });
        } else {
            let tab = user.Transactions.filter((n)=>n.type === "+");
            tab.forEach((element) => {
            createRow(element);
            });
        }
    }else{
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 4;
        td.textContent = "Aucune transaction récente";
        tr.appendChild(td);
        tbody.appendChild(tr);

    }

}

flitrerTransactions();
