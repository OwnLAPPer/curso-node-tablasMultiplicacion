
const {crearArchivo}= require("./helpers/multiplicar");
const argv=require("./config/yargs");
const colors=require("colors");


console.clear();

crearArchivo(argv.b, argv.listar,argv.h)
.then(nombreArchivo=> console.log(nombreArchivo,"creado"))
.catch(err=>console.log(err));






