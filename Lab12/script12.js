const componerTransformaciones = (fn1, fn2) => texto => fn2(fn1(texto));

const mayusculas = texto => texto.toUpperCase();
const agregarSigno = texto => texto + '!';

const transformar = componerTransformaciones(mayusculas, agregarSigno);

console.log(transformar('hola')); // 'HOLA!'
console.log(transformar('mundo')); // 'MUNDO!'

