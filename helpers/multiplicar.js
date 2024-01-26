const fs=require("fs");
const { Module } = require("module");
const colors=require("colors");
const crearArchivo= async(base=1,listar=false,hasta)=>{

try {
   
    
    salida= ` `;
    for(let multiplicador=1; multiplicador <=hasta; multiplicador++ ){
        let resultado= base*multiplicador;
        salida+=`
        ${base} X  ${multiplicador} es = ${resultado}
        `; 
    } 
    if(listar){
        console.log("=====================".bgGreen);
        console.log("tabla del",colors.bgBlue(base));
        console.log("=====================".bgCyan);  
        console.log(salida); 
    }
    
fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
return `tabla del ${base} creada`;

} catch (err) {
    throw err;
}
   

}

module.exports={
    crearArchivo
}






