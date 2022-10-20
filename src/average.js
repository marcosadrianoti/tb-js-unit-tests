/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros: 
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const checkingNumbers = (arrNumbers) => {
  for (const number of arrNumbers) {
    if (typeof number === 'string') {
      return false;
    }
  }
  return true;
};

const average = (arrNumbers) => {
  let isANumber = checkingNumbers(arrNumbers);
  if (isANumber === true && arrNumbers.length !== 0) {
    let sumTotal = 0;
    let qtNumbers = arrNumbers.length;
    for (const number of arrNumbers) {
      sumTotal += number;
    }
    return Math.round(sumTotal / qtNumbers);
  }
  return undefined;
};

console.log(average([2, 2, '4']));

module.exports = average;
