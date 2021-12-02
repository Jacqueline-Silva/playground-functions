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
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(testeDaFrase) {
  let separandoAsPalavras = testeDaFrase.split(' ', testeDaFrase.lenght);
  return separandoAsPalavras;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let concatenacao =
    arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let pontuacao = vitorias + empates;
return pontuacao
} 

// Desafio 6
function highestCount(arrayDeNumeros) {
  let total = 0;
  let maior = 0;
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
      maior =  Math.max.apply(null, arrayDeNumeros);
    if (maior === arrayDeNumeros[i]) {
        total += 1;
      }
  }
  return total;
} 


// Desafio 7
function catAndMouse() {
  //
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
