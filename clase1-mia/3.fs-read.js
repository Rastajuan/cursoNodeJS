//Esta es la forma síncrona de leer archivos. Es decir, el programa se detiene hasta que se lee el archivo. Por lo tanto, no ejecutará el console.log('Haciendo otra cosa mientras tanto...'); hasta que no se haya leído el archivo.

const fs = require('node:fs');

console.log('Leyendo primer archivo...');
const text = fs.readFileSync('./clase1-mia/text.txt', 'utf-8'); // Version síncrona
console.log(text);

console.log('Haciendo otra cosa mientras tanto...');

console.log("Leyendo segundo archivo...");
const text2 = fs.readFileSync("./clase1-mia/text2.txt", "utf-8"); // Version síncrona
console.log(text2);

// Ahora veremos la forma asíncrona de leer archivos. Es decir, el programa no se detiene hasta que se lee el archivo. Por lo tanto, ejecutará el console.log('Haciendo otra cosa mientras tanto...'); antes de que se haya leído el archivo. En primer lugar cambiaremos el método readFileSync por readFile. Este método recibe tres parámetros: la ruta del archivo, la codificación y un callback. El callback es una función que se ejecutará cuando se haya leído el archivo.El callback recibe dos parámetros: error y data.Si no hay error, data contendrá el contenido del archivo.Si hay error, data será undefined.Por lo tanto, podemos hacer lo siguiente:

console.log('Leyendo primer archivo...');
fs.readFile('./clase1-mia/text.txt', 'utf-8', (error, data) => {
    console.log(data);
});

console.log('Haciendo otra cosa mientras tanto...');
console.log("Leyendo segundo archivo...");
fs.readFile("./clase1-mia/text2.txt", "utf-8", (error, data) => {
    console.log(data);
});