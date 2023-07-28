import { platform, version, arch, cpus, freemem, totalmem, homedir, uptime } from 'node:os'; // Aqui importamos las funciones que necesitamos de os
//import os from 'node:os'; // Aqui importamos todo el modulo os
console.log('Info del sistema operativo: ');
console.log('---------------------------------');
console.log('Plataforma: ' , platform());
console.log('Versión: ' , version());
console.log('Arquitectura: ' , arch());
console.log("CPUs: " , cpus());
console.log('Memoria libre: ' , freemem());
console.log('Memoria total: ', totalmem());
console.log('Directorio raíz: ', homedir());
console.log('Tiempo encendido: ', uptime() /60 , 'minutos');
console.log('Tiempo encendido: ', uptime() /60 /60, 'horas');
console.log('Tiempo encendido: ', uptime() /60 /60 /24, 'días');
console.log('---------------------------------');