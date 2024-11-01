const express = require('express');
const path = require('path');

const perfilRoutes = require('./routes/perfil.routes');


const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/', perfilRoutes); 

app.listen(3000, () => {
  console.log('Server Rodando na porta: 3000')
});



