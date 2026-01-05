import { recharger } from "../Services/rechargerServices.js";
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

const montant = document.getElementById("montant");
const rechargerbtn = document.getElementById("recharger");
const selectCarte = document.getElementById("choix");

currentUser.cartes.forEach((carte, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `Carte ${index + 1}` ;
    selectCarte.appendChild(option);
});



rechargerbtn.addEventListener("click", handelRecharger);

function handelRecharger(){
    if(montant.value <= 0){
        alert("enter un montant valide");
        return;
    }
    const indexCarte = selectCarte.value;
    const carteChoisie = currentUser.cartes[indexCarte];
    
    recharger(montant, currentUser, carteChoisie, parseInt(indexCarte) + 1)
    .then(()=>{
        alert("succes");
        window.location.href="/src/View/dashboard.html";
    })
    .catch((msg) => {
        alert(msg);
    });
}