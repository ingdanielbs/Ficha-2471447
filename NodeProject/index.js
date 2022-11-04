const {getHeroe, getHeroePromise} = require('./heroes');
const {getSum} = require('./operaciones');

console.log('Hello World');

const saludo = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`);

saludo('Pedro', 'Perez');	


const saludar = (nombre) => console.log('Hola ' + nombre);
  
const procesarEntradaUsuario = (callback) => {
    let nombre = 'Pedro';
    callback(nombre);
  }

  procesarEntradaUsuario(saludar);

const sumar = (a, b, callback) => {
    callback(a + b);
};

sumar(5, 67, (resultado) => console.log(`La suma es ${resultado}`));
getHeroe('heroe6', (heroe) => console.log(heroe));

getHeroePromise('heroe1')
  .then((heroe) => console.log(heroe))
  .catch((error) => console.log(error));

getSum( 'm', 5)
.then((resultado) => console.log(resultado))
.catch((error) => console.log(error));


// crear una promesa que tenga como argumentos nombre, apellido y edad de una persona.
// Si la persona es mayor edad se debe resolver mostrando los datos de la persona
// Si la persona es menor de edad se debe rechazar mostrando un mensaje de error

