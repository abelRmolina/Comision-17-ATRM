let fs = require('fs')
let autos = require('./data/autos.json')
let guardarJson = (dato) => fs.writeFileSync('./data/autos.json',JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    listar : autos,
    listarFor : () => {
        for (let i = 0; i < autos.length; i++) {
            console.log(`${i+1} - ${autos[i].marca} ${autos[i].modelo}`); 
        }
    },
    agregar: (marca,modelo,year,km,precio,color) => {
        let auto = {
            marca,
            modelo,
            year,
            km,
            precio,
            color,
        }
        autos.push(auto)
        guardarJson(autos)
        return autos
    }
}

