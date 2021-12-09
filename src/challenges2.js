// Desafio 10
function techList(tecnologias, name) {
  let listaTech = [];
  for (let i = 0; i < tecnologias.length; i += 1) {
    tecnologias.sort();
    listaTech.push({
      tech: tecnologias[i],
      name: name
    });
  }
  if (tecnologias.length === 0) {
    return "Vazio!";
  }
  return listaTech;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let tranfString = '';
  let contador = 0;
  let n = [];
  if (arrayNumbers.length !== 11) {
    return "Array com tamanho incorreto."
  };
  for (index = 0; index < arrayNumbers.length; index += 1) {
    n.push
    tranfString += arrayNumbers[index];
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }

    if (arrayNumbers[index] === n) {
      contador += 1
    } else if (contador > 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  };
  let resultado = "(" + tranfString.substring(0, 2) + ") " + tranfString.substring(2, 7) + "-" + tranfString.substring(7, 11);
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absoluteAB = Math.abs(lineA - lineB);
  let absoluteAC = Math.abs(lineA - lineC);
  let absoluteCB = Math.abs(lineC - lineB);
  if (lineA < (lineC + lineB) && lineA > absoluteCB) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > absoluteAC) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > absoluteAB) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(bebida) {
  let encontrandoNumeros = bebida.replace(/[^1-9]/g, ''); //conseguindo numeros, porem string

  let coposDeAgua = 0;
  let resultadoSoma = 0;

  for (let somando = 0; somando <= parseInt(encontrandoNumeros.length); somando += 1) {
    resultadoSoma += parseInt(encontrandoNumeros[somando]);

    if (resultadoSoma === 1) {
      coposDeAgua = resultadoSoma + " copo de água";
    }
    if (resultadoSoma > 1) {
      coposDeAgua = resultadoSoma + " copos de água";
    }
  } return coposDeAgua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
