let info = document.getElementById('info');

async function personajes() {
    let data = await fetch('https://rickandmortyapi.com/api/character/');
    let personajes = await data.json();
    console.log(personajes.results);
    personajes.results.forEach((personaje) => {
        info.innerHTML += `${personaje.name}`
    })
}

personajes();

