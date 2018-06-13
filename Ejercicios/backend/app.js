const express = require('express');
const app = express();
const images = require('./routes/images')


/////

// app.get('/name', (req, res, next) => {
//     res.send({ Nombre: 'Juan Manuel Mèndez' });
// });
// app.get('/age', (req, res, next) => {
//     res.send('<h1>Mi edad es: </h1>, <h2>no recuerdo</h2>');
// });
// app.get('/occ', (req, res, next) => {
//     res.send('Gerente soporte IT');
// })

// app.get('/about', (req, res, next) => {
//     res.send('Algo que decir por mi');
// })
app.use('/images', images);




app.listen(3000, () => {
    console.log("El servidor corre en el puerto 3000");
});