function setup() {
  createCanvas(400, 400);
  count(); // nome da função
}

function draw() {
  background(220);
}

function count(){ // função contar
  let numbers = [1,2,3,4,5,6,7,8,9]; // matriz q o numeros
  let len = numbers.length; // faz leitura completa da matriz

  for(let i = 1; i<len; i++) // laço
  {
    console.log(numbers[i]); // leitra de 1 
  }
}