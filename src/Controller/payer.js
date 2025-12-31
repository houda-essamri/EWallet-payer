const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

const nom = document.getElementById("nom");
const montant = document.getElementById("montant");
const payer = document.getElementById("payer");
const result = document.getElementById("result");

payer.addEventListener("click", paiment);

function paiment(){
    if(nom.value.trim() === "" || montant.value ===""){
        alert("S'il vous plait remplir les cases");
        return;
    } else {
        verifierMontant()
        .then(ok =>{
                addTransaction();
                updateSolde();
                result.textContent = ok;
                result.style.color = "green";
            })
        .catch(ok=>{
             result.textContent = ok;
             result.style.color = "red";
        });

    }   
}

function verifierMontant(){
    return new Promise((resolve, reject)=>{
        if( montant.value <= currentUser.Solde && montant.value > 0){
            resolve("Paiment effectue avec Succes");
        } else {
            reject("Un probleme au niveau de Solde!!");
        }
    })
}


function addTransaction(){
    let transaction = {
        type: "-",
        title: nom.value,
        date: new Date().toLocaleDateString(),
        amount: montant.value,
        statue : "Succes"
    }
    currentUser.Transactions.unshift(transaction);
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
}

function updateSolde(){
    currentUser.Solde -= montant.value;
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
}