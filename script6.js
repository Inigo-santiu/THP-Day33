let arn1 = 'CCGUCGUUGCGCUACAGC';
let arn2 = 'CCUCGCCGGUACUUCUCG';

function separateArn(arn) {
  return arn.match(/.{1,3}/g)
}

function transformArn(cutarn) {
  arrarntransformed = [];
  cutarn.forEach(arn => {
  if (arn === "UCU" || arn === "UCC" || arn === "UCA" || arn === "UCG" || arn === "AGU" || arn === "AGC") {
    arrarntransformed.push("Sérine");
  }
  if (arn === "CCU" || arn === "CCC" || arn === "CCA" || arn === "CCG") {
    arrarntransformed.push("Proline");
  }
  if (arn === "UUA" || arn === "UUG") {
    arrarntransformed.push("Leucine");
  }
  if (arn === "UUU" || arn === "UUC") {
    arrarntransformed.push("Phénylalanine");
  }
  if (arn === "CGU" || arn === "CGC" || arn === "CGA" || arn === "CGG" || arn === "AGA" || arn === "AGG") {
    arrarntransformed.push("Arginine");
  }
  if (arn === "UAU" || arn === "UAC") {
    arrarntransformed.push("Tyrosine");
  }
  });
  return arrarntransformed.join("-");
}


function perform(arn) {
  let cutarn = separateArn(arn);
  let adn = transformArn(cutarn);
  console.log(adn);
}
console.log("How do you like those apples????!!!!!")

perform(arn1);
perform(arn2);
