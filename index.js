const express = require('express');
const app = express();

const port = process.env.PORT || 4200;

app.use(express.static(__dirname + '/proy/prod'));

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
