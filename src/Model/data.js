const users = [
    {
        nom : "HOUDA",
        email : "houda@gmail.com",
        password : "1234",
        numCompte : "0000000",
        Solde : 2,
        Transactions: []
        
    },
    {
        nom : "Omar",
        email : "omaromar@gmail.com",
        password : "aaaa",
        numCompte : "09090909",
        Solde : 3000,
        Transactions: [
            {
                type: "-",
                title: "Temu",
                date: "10/12/2025",
                amount: 300,
                statue : "Succes"
            },
            {
                type: "+",
                title: "Salaire",
                date: "3/12/2025",
                amount: 8000,
                statue : "Succes"
            },
            {
                type: "-",
                title: "ONCF",
                date: "19/11/2025",
                amount: 30,
                statue : "Succes"
            },
           
            {
                type: "+",
                title: "Salaire",
                date: "3/11/2025",
                amount: 8000,
                statue : "Succes"
            }
        ]
    },
    {
        nom : "Salima",
        email : "Salima@gmail.com",
        password : "0000",
        numCompte : "5656565656",
        Solde : 7000,
        Transactions: [
            {
                type: "-",
                title: "Temu",
                date: "10/12/2025",
                amount:300,
                statue : "Succes"
            },
            {
                type: "+",
                title: "Salaire",
                date: "3/12/2025",
                amount: 8000,
                statue : "Succes"
            },
            {
                type: "-",
                title: "ONCF",
                date: "19/11/2025",
                amount: 30,
                statue : "Succes"
            },
            {
                type: "+",
                title: "Salaire",
                date: "3/11/2025",
                amount: 8000,
                statue : "Succes"
            }
        ]
    }
]

function findUser(email, password){
    let user = users.find((u)=>u.email === email && u.password === password);
    return user;
}

function findUserByCompte(nom, numCompte) {
    let user = users.find((u) =>u.numCompte === numCompte && u.nom ===nom);
    return  user;
}

export {findUser};
export {findUserByCompte};