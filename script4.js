  const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },        //1
  { first: 'Marissa', last: 'Mayer', year: 1975 },    //1
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },       //1
  { first: 'Jack', last: 'Dorsey', year: 1976 },      //1
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },  //1
  { first: 'Marc', last: 'Andreessen', year: 1971 },  //1
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Provide and array with the first and last names of the people
// What is the age of each one today



// Order them alphabetically.

console.log("Here they are sorted alphabetically by their last name")
console.log(entrepreneurs.sort(function(a, b) {
  if (a.last.toLowerCase() < b.last.toLowerCase()
    ) return -1;
    if (a.last.toLowerCase() > b.last.toLowerCase()
    ) return 1;
    return 0;
}));

// List the people born in 70s
function seventies() {
  entrepreneurs.forEach(entrepreneur => {
    if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979) {
      console.log(entrepreneur);
    }
  })
};
console.log("Here they are sorted by years.")
seventies()

function agesToday(){
  entrepreneurs.forEach(entrepreneur => {
    let agesToday = 2020 - entrepreneur.year;
    let answer =`${entrepreneur.first} ${entrepreneur.last}, ${agesToday} years old.`;
    console.log(answer)
  });
};
console.log("Here are their ages in 2020")
agesToday()

function names(){
  let array=[];
  entrepreneurs.forEach(entrepreneur => {
    let first_name = entrepreneur.first;
    let last_name = entrepreneur.last;
    array.push(first_name + " " + last_name);

  });
  console.log(array);
};
console.log("Here are the names only, no years.")
names()

