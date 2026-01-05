import { findUserByCompte } from "../Model/data.js";

function checkDestinataire(destinataire, currentUser){
    return new Promise((resolve, reject)=>{
        if(destinataire && destinataire.id !== currentUser.id){
            resolve("dest existe");
        } else {
            reject ("dest doesn't exist ");
        }
    })
}
 
function checkMonatant(montant){
    return new Promise((resolve, reject)=>{
        if(montant.value <= 40000 && montant.value > 0){
            resolve(" montant valide ");
        } else {
            reject (" montant invalide ");
        }
    })
}

function updateSolde(montant, currentUser, destinataire){
    return new Promise((resolve, reject)=>{
        if(montant.value > 0 && montant.value <= currentUser.balance){
            destinataire.balance += parseInt(montant.value);
            currentUser.balance -= parseInt(montant.value)
            resolve("Update avec succes");
       } else {
            reject ("Update not okay");
       }
    });
}


function addTransaction(montant, currentUser, destinataire){
    return new Promise((resolve)=>{
    let transactionDes = {
        type: "+",
        title: "transfere from " + currentUser.nom,
        date: new Date().toLocaleDateString(),
        amount: montant.value,
        statut : "Succes"
    }
    destinataire.Transactions.unshift(transactionDes);

    let transactionUsr = {
        type: "-",
        title: "transfere to " + destinataire.nom,
        date: new Date().toLocaleDateString(),
        amount: montant.value,
        statut : "Succes"
    }
    currentUser.Transactions.unshift(transactionUsr);


    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    sessionStorage.setItem("destinataire",JSON.stringify(destinataire));
    resolve("transaction ajoute");
    })
}


function transferer(montant, currentUser, destinataire){
    return checkDestinataire(destinataire, currentUser)
    .then((msg)=>{
        console.log(msg);
        return checkMonatant(montant)
    })
    .then((msg)=>{
        console.log(msg);
        return updateSolde(montant, currentUser, destinataire)
    })
    .then((msg)=>{
        console.log(msg);
        return addTransaction(montant, currentUser,destinataire);
    })
    .catch((msg)=>{
        alert (msg);
    })
}   

export {transferer};