// Desafio 1
function compareTrue(AnaPassouNoTeste, PedroPassouNoTeste) {
  if (AnaPassouNoTeste === true && PedroPassouNoTeste === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2
}

// Desafio 3
function splitSentence(testeDaFrase) {
  let separandoAsPalavras = testeDaFrase.split (" ", testeDaFrase.lenght);
  return separandoAsPalavras;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let concatenacao = arrayDeStrings[arrayDeStrings.length -1] + ", " + arrayDeStrings[0];
  return concatenacao
} 


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
