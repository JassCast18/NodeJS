const path=require('node:path');

//Unir rutas con path.join
console.log(path.sep);//ver que separador de rutas usa el sistema operativo

const filePath=path.join('folder','subfolder','text.txt');
console.log(filePath);

const base = path.basename('\Users\jassc\OneDrive\Escritorio\Jaser\Tarea 6to Semestre\Base de datos.txt')
console.log(base);

