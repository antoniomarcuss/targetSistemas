/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?

*/
let indIce = 13;
let soma = 0;
let k = 0;

while (k < indIce) {
  k++;
  soma += k;
}

console.log(soma); // Resultado 91

/*
 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const fibonacci = (number) => {
  if (number <= 1) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

const number = Number(prompt("Informe um número: "));

let belongs = false;
for (let i = 0; i <= number; i++) {
  if (fibonacci(i) === number) {
    belongs = true;
    break;
  }
}

if (belongs) {
  console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`);
}

// 3) Descubra a lógica e complete o próximo elemento:

const getNextElement = (array) => {
  const lastElement = array[array.length - 1];

  switch (array.length) {
    case 4:
      return lastElement + 2;
    case 6:
      return lastElement * 2;
    case 7:
      return lastElement ** 2;
    case 8:
      return lastElement + 28;
    case 9:
      return lastElement + array[array.length - 2];
    case 10:
      return lastElement + 1;
    default:
      return "Sequência não reconhecida";
  }
};

const proximoA = getNextElement([1, 3, 5, 7]);
const proximoB = getNextElement([2, 4, 8, 16, 32, 64]);
const proximoC = getNextElement([0, 1, 4, 9, 16, 25, 36]);
const proximoD = getNextElement([4, 16, 36, 64]);
const proximoE = getNextElement([1, 1, 2, 3, 5, 8]);
const proximoF = getNextElement([2, 10, 12, 16, 17, 18, 19]);

console.log("a:", proximoA); // resultado = 9
console.log("b:", proximoB); // resultado = 128
console.log("c:", proximoC); // resultado = 1296
console.log("d:", proximoD); // resultado = 66
console.log("e:", proximoE); // resultado = 16
console.log("f:", proximoF); // resultado = 361

/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
 */

/*RESPOSTA : Na primeira ida, deixamos o interruptor 1 ligado por alguns minutos para aquecer a lâmpada correspondente.
Ao desligar o interruptor 1 e ligar o interruptor 2, a lâmpada controlada pelo interruptor 2 acende porque ainda está quente.
Na segunda ida, podemos identificar facilmente a lâmpada controlada pelo interruptor 1 (acesa), a lâmpada controlada pelo interruptor 2 (quente, mas apagada) e, por exclusão, a lâmpada controlada pelo interruptor 3 (fria e apagada). */

/*
Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse; */

const string = "Hello World";

function inverteString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

console.log(inverteString(string));
