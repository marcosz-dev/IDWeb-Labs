const jsonOriginal = '{"nombre":"Ana","edad":25,"ciudad":"Lima"}';

const obj = JSON.parse(jsonOriginal);
console.log("Antes:", obj);

obj.edad = 26;

const jsonActualizado = JSON.stringify(obj);
console.log("Después:", jsonActualizado);
