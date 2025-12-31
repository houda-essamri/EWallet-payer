import {findUserByCompte} from "../Model/data.js";
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

const nom = document.getElementById("nom");
const compte = document.getElementById("compte");
const montant = document.getElementById("montant");
const envoyer = document.getElementById("envoyer");
// const transferForm = document.getElementById("transferForm");

let user;

envoyer.addEventListener("click", ()=>{
    transferer(user)
    .then((message)=>console.log(message))
    .catch((error)=>(console.log(error)));
});
 
function transferer(user){
    user = findUserByCompte(nom.value, compte.value);
    return new Promise((resolve, reject)=>{
        if (user) {
            resolve("oui existe");
        } else {
            reject("non il existe pas");
        }
    });
}



  