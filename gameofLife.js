// Celda viva muere < 2 vecinos
// Celda con 2 o 3 vive
// Celda viva muere > 3 vecinos
// Celta muerta == 3 vive

const tableDimension = 5;

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
    for (let z = 0; z < 3; z += 1) {
      arrayCreation[i][z] = (table[(vertical - 1) + i][(horizontal - 1) + z]);
    }
  }
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
      if (matrixTable[i][z] === 1) {
        numOne += 1;
        numNeighboursRunned += 1;
      }
      else {
        numNeighboursRunned += 1;
      }
      if (numOne < 3 && numNeighboursRunned > 8) {
        // eslint-disable-next-line no-param-reassign
        matrixTable[1][1] = 0;
      }
    }
  }
  return matrixTable;
}

function mainTableRunner(tableOrigin) {
  const finalTable = tableCreator(tableDimension)
  for (let i = 0; i < tableOrigin.length; i += 1) {
    for (let z = 0; z < tableOrigin[i].length; z += 1) {
      if (tableOrigin[i][z] === 1) {
        // console.log('-----------')
        const tempMatrixExtraction = matrixExtraction(tableOrigin, i, z);
        // console.table(tempMatrixExtraction)
        const modifiedMatrix = counterMatrixExtraction(tempMatrixExtraction);
        // console.table(modifiedMatrix)
        matrixInsertion(modifiedMatrix, finalTable, i, z)

      }
    }
  }
  console.table(finalTable);
}

const firstTable = tableCreator(tableDimension)
firstTable[1][0] = 1;
firstTable[2][0] = 1;
firstTable[3][0] = 1;
console.table(firstTable);
// mainTableRunner(firstTable);


