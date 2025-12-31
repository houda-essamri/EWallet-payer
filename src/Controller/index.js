const login = document.getElementById("Loginbtn");

login.addEventListener("click", loginTraitement);

function loginTraitement(){
    login.textContent= "loading...";
    setTimeout(()=>{
        window.location.href = "/src/View/login.html";
    }, 1000);
}