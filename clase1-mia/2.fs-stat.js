const fs = require('node:fs');

const stats = fs.statSync('./clase1-mia/text.txt'); // Version síncrona
console.log(stats);
console.log('¿Es un archivo?', stats.isFile()); // Si es un archivo
console.log('¿Es un directorio?', stats.isDirectory()); // Si es un directorio
console.log('¿Es un socket?', stats.isSocket()); // Si es un socket
console.log('¿Es un enlace simbólico?', stats.isSymbolicLink()); // Si es un enlace simbólico
console.log('¿Es un FIFO?', stats.isFIFO()); // Si es un FIFO
console.log('¿Es un bloque de dispositivo?', stats.isBlockDevice()); // Si es un bloque de dispositivo
console.log('¿Es un caracter de dispositivo?', stats.isCharacterDevice()); // Si es un caracter de dispositivo
console.log('Su tamaño es:', stats.size, 'bytes')