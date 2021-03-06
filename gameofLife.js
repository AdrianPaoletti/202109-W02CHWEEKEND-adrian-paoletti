function tableCreator(dimensionY, dimensionX) {
  const arrayCreator = [];
  for (let i = 0; i < dimensionY; i += 1) {
    arrayCreator[i] = [0];
    for (let z = 0; z < dimensionX; z += 1) {

      arrayCreator[i][z] = 0;
    }
  }
  return arrayCreator;
}

function matrixExtraction(table, vertical, horizontal) {
  const arrayCreation = [];
  for (let i = 0; i < 3; i += 1) {
    arrayCreation[i] = Array(3);
    if (((vertical - 1) + i) < 0) {
      for (let z = 0; z < 3; z += 1) {
        arrayCreation[i][z] = 0;
      }
    }
    else if (((vertical - 1) + i) === table.length) {
      for (let z = 0; z < 3; z += 1) {
        arrayCreation[i][z] = 0;
      }
    }
    else {
      for (let z = 0; z < 3; z += 1) {
        if (table[(vertical - 1) + i][(horizontal - 1) + z] === undefined) {
          arrayCreation[i][z] = 0;
        }
        else {
          arrayCreation[i][z] = (table[(vertical - 1) + i][(horizontal - 1) + z]).innerHTML;
        }
      }
    }
  }
  return arrayCreation;
}

function matrixInsertion(tableMatrix, endTalbe, vertical, horizontal) {
  for (let i = 0; i < tableMatrix.length; i += 1) {
    for (let z = 0; z < tableMatrix[i].length; z += 1) {
      if (i === 1 && z === 1) {

        endTalbe[(vertical - 1) + i][(horizontal - 1) + z] = tableMatrix[i][z];
      }
    }
  }
  return endTalbe
}

function counterMatrixExtraction(matrixTable) {
  let numOne = 0;
  let numNeighboursRunned = 0;
  for (let i = 0; i < matrixTable.length; i += 1) {
    for (let z = 0; z < matrixTable[i].length; z += 1) {

      if (matrixTable[i][z] === undefined) {
        numNeighboursRunned += 1;
      }
      else if (matrixTable[i][z] === '1') {
        numOne += 1;
        numNeighboursRunned += 1;
      }
      else {
        numNeighboursRunned += 1;
      }
      if ((numOne < 3 || numOne > 4) && numNeighboursRunned > 8) {

        matrixTable[1][1] = '0';
      }
      else if (numOne === 3 && matrixTable[1][1] === '0' && numNeighboursRunned > 8) {

        matrixTable[1][1] = '1';
      }
    }
  }
  return matrixTable;
}

function changeTable(temporalTable, originalTable) {
  for (let i = 0; i < originalTable.length; i += 1) {
    for (let z = 0; z < originalTable[i].length; z += 1) {
      originalTable[i][z].innerHTML = temporalTable[i][z];
      if (originalTable[i][z].innerHTML === '0') {
        originalTable[i][z].style.backgroundColor = '#7e7e7e';
      }
      else {
        originalTable[i][z].style.backgroundColor = '#FFFF00';
      }
    }
  }
  return originalTable
}

function mainTableRunner(tableOrigin) {
  const finalTable = tableCreator(tableDimensionY, tableDimensionX)
  for (let i = 0; i < tableOrigin.length; i += 1) {
    for (let z = 0; z < tableOrigin[i].length; z += 1) {
      const tempMatrixExtraction = matrixExtraction(tableOrigin, i, z);
      const modifiedMatrix = counterMatrixExtraction(tempMatrixExtraction);
      matrixInsertion(modifiedMatrix, finalTable, i, z)
    }
  }
  changeTable(finalTable, tableOrigin)
  return tableOrigin;
}

function randomTable(tableOrigin) {
  for (let i = 0; i < tableOrigin.length; i += 1) {
    for (let z = 0; z < tableOrigin[i].length; z += 1) {
      const number = Math.floor(Math.random() * (1 - 0 + 1) + 0);
      const numberToString = number.toString();
      tableOrigin[i][z].innerHTML = numberToString;
      if (number === 1) {
        tableOrigin[i][z].style.background = "#FFFF00";
      }
    }
  }
}

// TABLE DIMENSION
const tableDimensionY = 18;
const tableDimensionX = 30;

// SELECTOR INTO ARRAY
const matrixDivsX = document.querySelectorAll('.matrix__square--Y > div');
const matrixSelector = tableCreator(tableDimensionY, tableDimensionX);
let contador = 0;
for (let i = 0; i < matrixSelector.length; i += 1) {
  for (let z = 0; z < matrixSelector[i].length; z += 1) {
    matrixSelector[i][z] = matrixDivsX[contador];
    const number = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    const numberToString = number.toString();
    matrixSelector[i][z].innerHTML = numberToString;
    if (number === 1) {
      matrixSelector[i][z].style.background = "#FFFF00";
    }
    contador += 1;
  }
}

// COLOR YELLOW
for (let i = 0; i < matrixSelector.length; i += 1) {
  for (let z = 0; z < matrixSelector[i].length; z += 1) {
    matrixSelector[i][z].addEventListener("click", () => {
      matrixSelector[i][z].style.background = "#FFFF00";
      matrixSelector[i][z].innerHTML = '1';

    });
  };
};

// FROM YELLOW TO GRAY
for (let i = 0; i < matrixSelector.length; i += 1) {
  for (let z = 0; z < matrixSelector[i].length; z += 1) {
    matrixSelector[i][z].addEventListener("click", () => {
      if (matrixSelector[i][z].style.background === "#FFFF00") {
        matrixSelector[i][z].style.background = "#7e7e7e";
      }
    });
  };
};

// BUTTON CLEAR
const clearMatrix = document.querySelector('.footer__button--clear');
clearMatrix.addEventListener('click', () => {
  for (let i = 0; i < matrixSelector.length; i += 1) {
    for (let z = 0; z < matrixSelector[i].length; z += 1) {
      matrixSelector[i][z].style.backgroundColor = '#7e7e7e';
      matrixSelector[i][z].innerHTML = '0';
    }
  }
  clearInterval(intervalID);
})

// BUTTON PLAY
const playMatrix = document.querySelector('.footer__button--play');
let intervalID;
playMatrix.addEventListener('click', () => {
  intervalID = window.setInterval(mainTableRunner, 600, matrixSelector);
})

// BUTTON STOP
const stopMatrix = document.querySelector('.footer__button--stop');
stopMatrix.addEventListener('click', () => {

  clearInterval(intervalID);
})

// BUTTON RANDOM
const randomMatrix = document.querySelector('.footer__button--random');
randomMatrix.addEventListener('click', () => {
  clearInterval(intervalID);
  randomTable(matrixSelector);
  playMatrix.click();
})

playMatrix.click();








