// Celda viva muere < 2 vecinos
// Celda con 2 o 3 vive
// Celda viva muere > 3 vecinos
// Celta muerta == 3 vive

// const dimension = 5;

/* console.table(tablerus); */
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

const firstTable = tableCreator(5)
console.table(firstTable)
firstTable[1][2] = 1;
firstTable[2][2] = 1;
firstTable[3][2] = 1;
console.table(firstTable);

function matrixExtraction(table, vertical, horizontal) {
  const arrayCreation = [];
  for (let i = 0; i < 3; i += 1) {
    arrayCreation[i] = Array(3);
    for (let z = 0; z < 3; z += 1) {
      arrayCreation[i][z] = (table[vertical + i][horizontal + z]);
      console.log(arrayCreation[i][z])
    }
  }
  return arrayCreation;
}
console.table(matrixExtraction(firstTable, 0, 1));

/* function matriExtraction(firstTable) {
  const arrayCreatior = [];
  const numOne = 0;
  const numNeighbours = 0;
  for (let i = 0; i < dimension; i += 1) {
    for (let z = 0; z < dimension; z += 1) {
      if (firstTable[i][z] === 1) {
        tableCreator(3)
      }
    }
  }
}
/* const tablerusSecond = [0];
for (let i = 0; i < tablerus.length; i += 1) {
  for (let z = 0; z < tablerus[i].length; z += 1) {
    console.log('Hola');
    if (tablerus[i][z] === 1) {
      const contador0 = 0;
      let contador1 = 0;
      let contador8 = 0;
      console.log(`value of z ${z} value of i ${i}`)
      console.log('------------------')
      for (let a = i - 1; a < i + 2; a += 1) {
        console.log('------------------')
        for (let e = z - 1; e < z + 2; e += 1) {
          console.log(`value of a: ${a} value of e: ${e} value of table: ${tablerus[a][e]}`);
          if (tablerus[a][e] === 1 && tablerus[a][e] !== tablerus[i][z]) {
            contador1 += 1;
            contador8 += 1;
          } else {
            contador8 += 1;
          }
          if (contador1 > 3) {
            tablerus[i][z] = 0;
          }
          console.log(`Value 8: ${contador8}`);
          console.log(`Value 1: ${contador1}`);
          if (contador1 < 2 && contador8 === 9) {
            console.log('alohaaaa');
            tablerus[i][z] = 0;
          }
        }
      }
    }

/* else {
  tablerusSecond[i][z].push(tablerus[i][z])
} */

// }
// }
/*
console.log(firstTable); */

