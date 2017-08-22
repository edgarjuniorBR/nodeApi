'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({ active: true }, 'title price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                'mensagem': 'Unexpected Error',
                'item': req.body,
                'data': e
            });
        });
};

exports.getBySlug = (req, res, next) => {
    Product.findOne({
            active: true,
            slug: req.params.slug
        }, 'title price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                'mensagem': 'Unexpected Error',
                'item': req.body,
                'data': e
            });
        });
};

exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                'mensagem': 'Unexpected Error',
                'item': req.body,
                'data': e
            });
        });
};

exports.getByTag = (req, res, next) => {
    Product.find({ tags: req.params.tag })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                'mensagem': 'Unexpected Error',
                'item': req.body,
                'data': e
            });
        });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
        .then(x => {
            res.status(201).send({
                'mensagem': 'Product Created',
                'item': req.body
            });
        }).catch(e => {
            res.status(400).send({
                'mensagem': 'Unexpected Error',
                'item': req.body,
                'data': e
            });
        });
};

exports.put = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price
            }
        })
        .then(data => {
            res.status(200).send({
                'mensagem': 'Produto Atualizado com Sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                'mensagem': 'Unexpected Error',
                'item': req.body,
                'data': e
            });
        });
};

exports.delete = (req, res, next) => {
    Product.findOneAndRemove(req.params.id)
        .then(data => {
            res.status(200).send({
                'mensagem': 'Produto removido com Sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                'mensagem': 'Unexpected Error',
                'item': req.body,
                'data': e
            });
        });
};