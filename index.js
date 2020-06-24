'use strict'
//ruta base y puerto
var app = require('./app');
var port = process.env.PORT || 3977;

//se inicia el servidor
app.listen(port, function () {
    console.log("el servidor del api rest activo en http://localhost:" + port)
    let now = new Date();
    console.log('La fecha actual es', now);
});







