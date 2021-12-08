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
function generatePhoneNumber() {
  //
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
function hydrate() {
  //
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
