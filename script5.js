const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Pour votre information, en anglias, on ne 'rent' jamais des livres, we 'borrow' books.")

// question 1 - Est-ce que tous les livres ont été au moins empruntés une fois ?
function rentedAtLeastOnce(){
  books.forEach(book =>{
      if (book.rented <= 0){
          console.log(`${book.title} n'a jamais été emprunté`)}
      else {
          console.log("tous les livres ont déjà été empruntés au moins une fois")
      }
  });
};
console.log("Quel livre n'a encore jamais été emprunté à la bibliothèque ? ")
rentedAtLeastOnce()

// question 2 - Quel est livre le plus emprunté ?
function mostRentedBook(){
  arrRentedbook=[]
  books.forEach(book => {
      let rentedBook=book.rented;
      arrRentedbook.push(rentedBook);
  })
  arrRentedbook.sort();
  max=arrRentedbook[11];
  books.forEach(book => {
      if (book.rented === max){
          console.log(`${book.title} est le livre le plus emprunté avec ${max} emprunts à ce jour`);
      };
  });
}
console.log("Quel est l'ouvrage le plus emprunté?")
mostRentedBook()

// question 3 - Quel est le livre le moins emprunté ?
function leastRentedBook(){
  arrRentedbook=[]
  books.forEach(book => {
      let rentedBook=book.rented;
      arrRentedbook.push(rentedBook);
  })
  arrRentedbook.sort();
  min=arrRentedbook[0];
  books.forEach(book => {
      if (book.rented === min){
          console.log(`${book.title} est le livre le moins emprunté avec ${min} emprunts à ce jour`);
      };
  });
}
console.log("Quel est l'ouvrage le moins emprunté ?")
leastRentedBook()

// question 4 - Trouve le livre avec l'ID: 873495 ;
function withIdGiven(){
  books.forEach(book => {
      if (book.id === 873495){
          console.log(`${book.title} est le livre que vous cherchez`);
      };
  });
}
console.log("Quel est le livre avec l'id égale à 873495")
withIdGiven()

// question 5 - Supprime le livre avec l'ID: 133712 ;
function deleteWithIdGiven(){
  for (i = 0; i < books.length; i++) {
      if (books[i].id == 133712){
        delete books[i]
      }
  }
  console.log(books);
}
console.log("L'ouvrage Gatsby le Magnifique a bien été détruit!")
deleteWithIdGiven()

// question 6 - Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
function alphabeticalBookOrder(){
  let arrayBooksTitle=[];
  books.forEach(book => {
      let title=book.title;
      arrayBooksTitle.push(title);
  });
  console.log(arrayBooksTitle.sort());
}
console.log("Voici les ouvrages classés par ordre alphabétique selon leur titre")
alphabeticalBookOrder()