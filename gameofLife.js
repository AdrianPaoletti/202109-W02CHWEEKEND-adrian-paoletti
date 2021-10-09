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
        arrayCreation[i][z] = (table[(vertical - 1) + i][(horizontal - 1) + z]);
      }
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
      if ((numOne < 3 || numOne > 4) && numNeighboursRunned > 8) {
        // eslint-disable-next-line no-param-reassign
        matrixTable[1][1] = 0;
      }
      else if (numOne === 3 && matrixTable[1][1] === 0) {
        // eslint-disable-next-line no-param-reassign
        matrixTable[1][1] = 1;
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
      const modifiedMatrix = counterMatrixExtraction(tempMatrixExtraction);
      matrixInsertion(modifiedMatrix, finalTable, i, z)
    }
  }
  return finalTable;
}

const firstTable = tableCreator(tableDimension)
firstTable[2][2] = 1;
firstTable[3][2] = 1;
firstTable[1][2] = 1;
console.table(firstTable);
/* let endTable;
for (let i = 0; i < 3; i++) {
  if (i === 0) {
    endTable = mainTableRunner(firstTable);
    console.table(endTable);
  }
  else {
    const m = mainTableRunner(endTable);
    console.table(m);
  }

} */



