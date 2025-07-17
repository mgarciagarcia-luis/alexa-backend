const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola desde tu backend Alexa en Render!');
});

// Aquí podrías agregar más rutas para manejar peticiones desde Alexa
// Por ejemplo:
// app.post('/alexa', (req, res) => { ... });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

