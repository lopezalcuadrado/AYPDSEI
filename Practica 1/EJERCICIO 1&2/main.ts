/*
                  Space Seed


*/
const pasajeros = [
  {
    name: "Guillermo",
    birthplace: "España",
    age: 25,
    height: 175,
    weight: 70,
    gender: "masculino",
    infected: true,
  },
  {
    name: "María",
    age: 23,
    height: 165,
    weight: 55,
    gender: "femenino",
    infected: false,
  },
  {
    name: "Pedro",
    birthplace: "Argentina",
    age: 28,
    height: 180,
    weight: 80,
    gender: "masculino",
    infected: false,
  },
  {
    name: "Ana",
    birthplace: "Colombia",
    age: 22,
    height: 160,
    weight: 50,
    gender: "femenino",
    infected: true,
  },
  {
    name: "Luis",
    birthplace: "Perú",
    age: 27,
    height: 170,
    weight: 75,
    gender: "masculino",
    infected: false,
  },
  {
    name: "Sandra",
    birthplace: "Brasil",
    age: 24,
    height: 175,
    weight: 65,
    gender: "femenino",
    infected: false,
  },
];

type Persona = {
  name?: string,
  birthplace?: string,
  age: number,
  height: number, // en centimetros
  weight: number,  // en kilos
  gender: string,   
  infected: boolean;
}

let sizeofship = [12,3,4] 


type dymensionsoftheship = {
  
  xlenght: number,
  yheigh: number,
  zwidth: number,
}

interface Spaceship {
  weight: number,
  dymensions: dymensionsoftheship,
  speed: number,
  ListaPasajeros: Persona[];
}
let enterprise: Spaceship = {
  weight: 35000,
  dymensions: {  xlenght: 3, yheigh:4, zwidth: 4
  },
  speed: 0,
  ListaPasajeros: [],

  }


  enterprise.ListaPasajeros = pasajeros;

//tripulantes con nombre 
  const personasconnombe: Persona[] = enterprise.ListaPasajeros.filter( elem => elem.name)
  console.log('elementos que conoces de los users ')
const personasysustipos = personasconnombe.forEach (elem => console.log(Object.keys((elem) ) ) )
  
 
/*
                              Ejercicio 2  This Side of Paradise

 */


//                                                                      listado de pasajeros sanos    (2.1)
//
//                                                                Haciendo uso del filter agrupamos a todos los pasajeros sanos en un grupo y con el 
//                                                                for each obtememos  el nombre por pantalla 
console.log("listado de pasajeros sanos\n")
const personassanas = pasajeros.filter((elem) => elem.infected !== true)
.forEach((elem) => console.log(elem.name))
//
//                                                                Haciendo uso del some averiguamos si hay algun miembro en la trupulación infectado 

const hayinfectados: boolean = pasajeros.some((x) => x.infected === true);
if (hayinfectados=== false  )  console.log("no hay pasajeros infectados")
else {console.log(" \n Primer pasajero infectado  \n")
let primerinfectado = pasajeros.find((elem) => elem.infected === true);
console.log(primerinfectado)}

//                                                                Haciendo uso del every averiguamos si estan todos sanos 

const sanossanisimos: boolean = pasajeros.every((x) => x.infected ===false);
console.log('todos sanos ',sanossanisimos); // false
