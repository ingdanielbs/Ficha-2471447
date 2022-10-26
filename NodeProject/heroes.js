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

module.exports = {
    getHeroe,
    heroes
}
