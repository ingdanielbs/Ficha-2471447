let info = document.getElementById('info');

async function personajes() {
    let data = await fetch('https://rickandmortyapi.com/api/character/');
    let personajes = await data.json();
    console.log(personajes.results);
    personajes.results.forEach((personaje) => {
        info.innerHTML += `
        <div class="col">
    <div class="card h-100">
      <img src="${personaje.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <p class="card-text">Estado: ${personaje.status}</p>
        <p class="card-text">Especie: ${personaje.species}</p>
        <p class="card-text">Género: ${personaje.gender}</p>
      </div>
    </div>
  </div>       
        `
    })
}

personajes();

