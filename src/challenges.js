// Desafio 1
function compareTrue(AnaPassouNoTeste, PedroPassouNoTeste) {
  if (AnaPassouNoTeste && PedroPassouNoTeste === true) {
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
  return pontuacao;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let total = 0;
  let maior = 0;
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    maior = Math.max.apply(null, arrayDeNumeros);
    if (maior === arrayDeNumeros[i]) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGatoUm = Math.abs(mouse - cat1);
  let distanciaGatoDois = Math.abs(mouse - cat2);
  if (distanciaGatoUm < distanciaGatoDois) {
    return 'cat1';
  } else if (distanciaGatoDois < distanciaGatoUm) {
    return 'cat2';
  } else if (distanciaGatoUm === distanciaGatoDois) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumerosDivisiveis) {
  let armazenaDivisiveis = [];
  for (let i = 0; i < arrayNumerosDivisiveis.length; i += 1) {
    if (
      arrayNumerosDivisiveis[i] % 3 == 0 &&
      arrayNumerosDivisiveis[i] % 5 !== 0
    ) {
      armazenaDivisiveis.push('fizz');
    } else if (
      arrayNumerosDivisiveis[i] % 5 == 0 &&
      arrayNumerosDivisiveis[i] % 3 !== 0
    ) {
      armazenaDivisiveis.push('buzz');
    } else if (
      arrayNumerosDivisiveis[i] % 3 == 0 &&
      arrayNumerosDivisiveis[i] % 5 == 0
    ) {
      armazenaDivisiveis.push('fizzBuzz');
    } else {
      armazenaDivisiveis.push('bug!');
    }
  }
  return armazenaDivisiveis;
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
