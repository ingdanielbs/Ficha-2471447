heroes = {
    'heroe1': {
        'name': 'Doctor Strange',
        'power': 'Magic',
    },
    'heroe2': {
        'name': 'Spiderman',
        'power': 'Spider Sense',
    },
    'heroe3': {
        'name':'Ironman',
        'power': 'Money',
    },
}

const getHeroe = (id, callback) => {
    callback(heroes[id]);
}

const getHeroePromise = (id) => {
    return new Promise((resolve, reject) => {
        if (heroes[id]){
            resolve(heroes[id]);
        }else{
            reject('No existe el heroe');
        }
    });
}

module.exports = {
    getHeroe,
    heroes,
    getHeroePromise,
}
