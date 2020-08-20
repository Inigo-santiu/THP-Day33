
    //From Kevin
var yourFloor = prompt ("Hello, please insert number of floors.")

let currentFloor = ""
  for (i = 0 ; i <= yourFloor; i++);
    {
      currentFloor += "#";
      console.log(currentFloor);
    }

    //From David
console.log(''.repeat(floor) + "#".repeat(currentFloor));


// thibault
const acidsObject = [
  { name: "Sérine",        arn: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC']},
  { name: "Proline",       arn: ['CCU', 'CCC', 'CCA', 'CCG']},
  { name: "Leucine",       arn: ['UUA', 'UUG']},
  { name: "Phénylalanine", arn: ['UUU', 'UUC']},
  { name: "Arginine",      arn: ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']},
  { name: "Tyrosine",      arn: ['UAU', 'UAC']}
]


let arnToAcids = (arn) => {
  let finalArray = [];
  let arrayOfArn = arn.match(/.{1,3}/g); // transforme la string en array par groupe de 3 ex: ["CCG", "UCG", "UUG", "CGC", "UAC", "AGC"]
  console.log(arrayOfArn) 
  arrayOfArn.forEach(finalGroupOfThreeArns => { // pour chaque acide final
    acidsObject.forEach(acid => { // pour chaque acide de l'objet des acides
      acid.arn.forEach(groupOfThreeArns => { // pour chaque groupe d'arn de l'array d'arn d'un acide donné
        if (acid.arn.includes(`${finalGroupOfThreeArns}`)) { // si l'array d'arn d'un acide contient le même arn que l'acide final
          finalGroupOfThreeArns = acid.name // alors on remplace le groupe d'ARN par son équivalent acide aminé
        };
      });
    });
    finalArray.push(finalGroupOfThreeArns) // on push ça dans un nouvel array
  }); // et on recommence jusqu'à la fin de la chaîne rentrée en paramètre
  let finalAcidChain = finalArray.join('-')
  console.log(finalAcidChain)
};

arnToAcids("CCUCGCCGGUACUUCUCG");
arnToAcids("CCGUCGUUGCGCUACAGC");
