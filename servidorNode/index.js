const http = require('http')

notas = {
    1: {
        nombre: 'Juan',
        nota: 7
    },
    2: {
        nombre: 'Maria',
        nota: 10
    },
    3: {
        nombre: 'Carlos',
        nota: 5,
    },
}

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(notas));
});

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

