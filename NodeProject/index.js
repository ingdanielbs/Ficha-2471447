const {getHeroe} = require('./heroes');

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
  