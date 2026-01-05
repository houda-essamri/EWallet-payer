const users = [
  {
    id : 1,
    nom: "Houda",
    email: "houda@gmail.com",
    password: "1234",
    balance : 300,
    cartes: [
      {
        numCompte: "11111",
        Solde: 12000
      }
    ],
    Transactions: [
          {
          type: "+",
          title: "Salaire",
          date: "01/12/2025",
          amount: 2000,
          statut: "Succes"
        },
        {
          type: "-",
          title: "Marjane",
          date: "05/12/2025",
          amount: 500,
          statut: "Succes"
        },
    ]
  },
  {
    id : 2,
    nom: "Omar",
    email: "omaromar@gmail.com",
    password: "aaaa",
    balance : 2000,
    cartes: [
      {
        numCompte: "22222",
        Solde: 3000
      },
      {
        numCompte: "33333",
        Solde: 5000
      } 
    ],
    Transactions: [
            {
            type: "-",
            title: "Temu",
            date: "10/12/2025",
            amount: 300,
            statut: "Succes"
          },
          {
            type: "+",
            title: "Salaire",
            date: "03/12/2025",
            amount: 8000,
            statut: "Succes"
          }
    ]
  }
];



function findUser(email, password){
    let user = users.find((u)=>u.email === email && u.password === password);
    return user;
}

function findUserByCompte(nom, numCompte) {
  return users.find(u => u.nom === nom && u.cartes.some(c => c.numCompte === numCompte));
}

export {findUser};
export {findUserByCompte};