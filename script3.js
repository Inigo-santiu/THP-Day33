
// var yourFloor = prompt ("Combien d'étages veux-tu ?");
// let currentFloor =''
//   for(i = 0 ; i <= yourFloor; i++);
//   {
//     currentFloor += '#';
//     console.log(currentFloor);
//   } 

// let word = "";
// let letter;
//   for (true) {
//   letter = prompt("Type something")
//   if (letter) {
//   word += letter;
//   console.log(word);
//   }  else {
//       break;
//   }
// }

// let userFloorNumber = prompt("Give a number please: ")
// for(var n = 0 ; n <=userFloorNumber; n++){
//   console.log(``);
// }

let height = prompt("This is another ridiculous pyramid exercise. Type the number of floors: ");
createHalfPyramid(height)

// function createHalfPyramid(height) {
//   for (var i = 1; i <=height; i++){
//     var row = '#';

//     for (var j = 1; j <= (height - 1); j++) {
//       row = '#';
//       console.log(row)
//     }
    
//   }

//   console.log(row);
// }

function createHalfPyramid(height) {
  for (let i = 1; i <=height; i++){
    let row = ' '.repeat(height-i) + '#'.repeat(i);
      console.log(row);
  }
}