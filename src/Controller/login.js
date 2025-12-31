import { findUser } from "../Model/data.js";

const email = document.getElementById("mail");
const password = document.getElementById("password");
const submitbtn = document.getElementById("submitbtn");
const result = document.getElementById("result");
let user;

submitbtn.addEventListener("click", connecter);

function connecter(){
    user = findUser(email.value ,password.value );
    result.textContent = "Verification ....";
    result.style.color = "black";
    if(user){
        setTimeout(()=>{
            result.textContent = "Verification avec Succes";
            result.style.color = "green";
        }, 1000);
           
        setTimeout(()=>{
               window.location.href = "/src/View/dashboard.html";
            }, 1500);
        sessionStorage.setItem("currentUser",JSON.stringify(user));
    } else {
        setTimeout(()=>{
            result.textContent = "Un probleme a ete detectee...";
            result.style.color = "red";
            
        },1000)
    }
}

