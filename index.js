import express from 'express'


const app = express()

app.get('/ping', (req, res) => res.send('pong'));

app.get('/jose', (req, res) => res.send('guillermo'));


app.get('/employees', (req, res) => res.send('Obteniendo Empleados'))

app.post('/employees', (req, res) => res.sÑend('Creando Empleados'))

app.put('/employees', (req, res) => res.send('Atualizando Empleados'))

app.delete('/employees', (req, res) => res.send('Eliminando  Empleados'))

app.listen(3000)
console.log('Server running on the port 3000')