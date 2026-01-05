function checkMonatant(montant){
    return new Promise((resolve, reject)=>{
        if(montant.value <= 40000){
            resolve(" montant valide ");
        } else {
            reject (" montant depasse le plafond ");
        }
    })
}

function updateSolde(montant, currentUser, carte){
    return new Promise((resolve, reject)=>{
        if(montant.value > 0 && montant.value <= carte.Solde){
            currentUser.balance += parseInt(montant.value);
            carte.Solde -= parseInt(montant.value);
            resolve("Update avec succes");
       } else {
            reject ("Update not okay");
       }
    });
}

function addTransaction(montant, currentUser, index){
    return new Promise((resolve)=>{
    let transaction = {
        type: "+",
        title: "Rechargement (Carte " + index + ")",
        date: new Date().toLocaleDateString(),
        amount: parseInt(montant.value),
        statue : "Succes"
    }
    currentUser.Transactions.unshift(transaction);
    resolve("transaction ajoute");
    })
}


function recharger(montant, currentUser, carteChoisie, index){
    return checkMonatant(montant)
    .then((msg)=>{
        console.log(msg);
        return updateSolde(montant, currentUser,carteChoisie)
    })
    .then((msg)=>{
        console.log(msg);
        return addTransaction(montant, currentUser, index);
    })
    .then(()=>{
        sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    })
}   

export {recharger};