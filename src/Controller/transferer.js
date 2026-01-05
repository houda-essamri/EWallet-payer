import { findUserByCompte } from "../Model/data.js";
import { transferer } from "../Services/transfererSevices.js";

const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

const nom = document.getElementById("nom");
const compte = document.getElementById("compte");
const montant = document.getElementById("montant");
const envoyer = document.getElementById("envoyer");





envoyer.addEventListener("click", handelTransferer);
 
function handelTransferer(){
    let destinataire = findUserByCompte(nom.value, compte.value);
    if(montant.value <= 0){
        alert("enter un montant valide");
        return;
    }
    transferer(montant, currentUser,destinataire)
    .then(()=>{
        alert("succes");
        window.location.href="/src/View/dashboard.html";
    })

}


  