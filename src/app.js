const path = require ('path');
const express = require('express');
const morgan = require ('morgan');
const app = express();

//importando rutas desde el sistema completo
const indexRoutes = require('./routes/index.js');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs' );

//middelwares
app.use(morgan('dev'));     //informa qué esta pidiendo el cliente a través de las rutas
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//iniciando el servidor
app.listen(app.get('port'), () => { 
    console.log(`Servidor en puerto ${app.get('port')}`);
});
