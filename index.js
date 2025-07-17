const express = require('express');
const app = express();
app.use(express.json());

app.post('/alexa', (req, res) => {
  console.log('Solicitud recibida de Alexa:', req.body);

  const respuesta = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: 'Hola, tu skill está conectada correctamente.',
      },
      shouldEndSession: true
    }
  };

  res.json(respuesta);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
