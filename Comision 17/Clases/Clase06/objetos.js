let profesor = {
    nombre : 'Cristian',
    apellido : "Elias",
    edad : 25,
    casado : false,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    },
    comidasFavoritas : ["pasta","asado","frutillas"],
    comisionesACargo : {
        Comision9 : {
            NumeroDeComision : 9,
            HorarioDeEntrada : 17,
            HorarioDeSalida: 19,
            Grupos : ["Grupo1","Grupo2","Grupo3"]
        },
        Comision14: {
            profesorACargo:"Cristian Elias",
            profesorAyudante: "Jeanette" ,
            numeroDeComision : 14,
            horarioDeEntrada : 9,
            horarioDeSalida: 11,
            grupos : ["Grupo1","Grupo2","Grupo3"]
        },
    }
}
let Grupo2 = profesor.comisionesACargo.Comision14.profesorACargo

let profesor2 = ["Cristian","Elias",25,false]

let auto = require('./auto.json')
console.log(auto.concesionarias);




