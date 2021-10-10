/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
function tableCreator(dimension) {
  const arrayCreator = [];
  for (let i = 0; i < dimension; i += 1) {
    arrayCreator[i] = [0];
    for (let z = 0; z < dimension; z += 1) {
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
        arrayCreation[i][z] = undefined;
      }
    }
    else if (((vertical - 1) + i) === table.length) {
      for (let z = 0; z < 3; z += 1) {
        arrayCreation[i][z] = undefined;
      }
    }
    else {
      for (let z = 0; z < 3; z += 1) {
        if (table[(vertical - 1) + i][(horizontal - 1) + z] === undefined) {
          arrayCreation[i][z] = undefined;
        }
        else {
          arrayCreation[i][z] = (table[(vertical - 1) + i][(horizontal - 1) + z]).innerHTML;
        }
      }
    }
  }
  /* console.log(arrayCreation);
  console.log('---'); */
  return arrayCreation;
}

function matrixInsertion(tableMatrix, endTalbe, vertical, horizontal) {
  for (let i = 0; i < tableMatrix.length; i += 1) {
    for (let z = 0; z < tableMatrix[i].length; z += 1) {
      if (i === 1 && z === 1) {
        // eslint-disable-next-line no-param-reassign
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
        // eslint-disable-next-line no-param-reassign
        matrixTable[1][1] = '0';
      }
      else if (numOne === 3 && matrixTable[1][1] === '0' && numNeighboursRunned > 8) {
        // eslint-disable-next-line no-param-reassign
        matrixTable[1][1] = '1';
      }
    }
  }
  return matrixTable;
}

function mainTableRunner(tableOrigin) {
  const finalTable = tableCreator(tableDimension)
  for (let i = 0; i < tableOrigin.length; i += 1) {
    for (let z = 0; z < tableOrigin[i].length; z += 1) {
      const tempMatrixExtraction = matrixExtraction(tableOrigin, i, z);
      // console.table(tempMatrixExtraction);
      const modifiedMatrix = counterMatrixExtraction(tempMatrixExtraction);
      // console.table(modifiedMatrix);
      // console.log('---')
      matrixInsertion(modifiedMatrix, finalTable, i, z)
    }
  }
  // eslint-disable-next-line no-param-reassign
  return finalTable;
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

// TABLE DIMENSION
const tableDimension = 5;


// SELECTOR INTO ARRAY
const matrixDivsX = document.querySelectorAll('.matrix__square--Y > div');
let matrixSelector = tableCreator(tableDimension);
let contador = 0;
for (let i = 0; i < matrixSelector.length; i += 1) {
  for (let z = 0; z < matrixSelector[i].length; z += 1) {
    matrixSelector[i][z] = matrixDivsX[contador];
    matrixSelector[i][z].innerHTML = '0';
    contador += 1;
  }
}

// COLOR YELLOW
for (let i = 0; i < matrixSelector.length; i += 1) {
  for (let z = 0; z < matrixSelector[i].length; z += 1) {
    // eslint-disable-next-line no-loop-func
    matrixSelector[i][z].addEventListener("click", () => {
      matrixSelector[i][z].style.background = "#FFFF00";
      matrixSelector[i][z].innerHTML = '1';
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
})


// BUTTON PLAY
let playMatrix = document.querySelector('.footer__button--play');
playMatrix.addEventListener('click', () => {
  let changedTable = mainTableRunner(matrixSelector)
  changeTable(changedTable, matrixSelector);
})










