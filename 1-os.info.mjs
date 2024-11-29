import { platform, version, arch, cpus, totalmem, freemem, uptime } from 'node:os'

console.log('Informacion del sistema operativo: ') 
console.log('-------------------------------------')
console.log('Nombre del sistema operativo: ' + platform())
console.log('Version del sistema operativo: ' + version())
console.log('Arquitectura del sistema operativo: ' + arch())
console.log('CPus', cpus())
console.log('Memoria total: ' + totalmem() + ' bytes')
console.log('Memoria libre: ' + freemem() + ' bytes')
console.log('uptime: ' + uptime() /60/60)