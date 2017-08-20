'use strict'

const express = require('express');

const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        'title': 'Node Sample API',
        'version': '0.0.1'
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send({
        'mensagem': 'criado'
    });
});

const update = router.put('/:id', (req, res, next) => {
    res.status(200).send({
        'mensagem': 'alterado'
    });
});

const del = router.delete('/:id', (req, res, next) => {
    res.status(200).send({
        'mensagem': 'excluido'
    });
});

const read = router.get('/', (req, res, next) => {
    res.status(200).send({
        'mensagem': 'consultado'
    });
});

app.use('/', route);
app.use('/products', create);
app.use('/products', update);
app.use('/products', del);
app.use('/products', read);

module.exports = app;