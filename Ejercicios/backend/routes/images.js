const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());


// {
//     id:1,s
//     url: 'www.algo.com/imagen',
//     description: 'La mejor imagen',
//     name:'la imagen'
// }

const images = [];

router.get('/', (req, res, next) => {
    res.send(images);
})

router.post('/', (req, res, next) => {
        const data = req.body;
        images.push(data);
        res.send(data);
    })
    //Aqui estamos definiendo el valor de post, en este caso sera un # y sera la posicion del arreglo
router.get('/:post', (req, res, next) => {
    const posicion = req.params.post;
    res.send(images[posicion]);
})

router.delete('/borrar/:post', (req, res) => {
    const borrar = req.params.post;
    res.send(images.splice(borrar, 1));;
})

router.get('/borrar/:post', (req, res, next) => {
    const posicion = req.params.post;
    res.send(images[posicion]);
})


module.exports = router;