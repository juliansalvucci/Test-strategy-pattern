var express = require('express');
var router = express.Router();

const quoterContext = require('../domain/quoter/quoterContext');
const localStrategy = require('../domain/quoter/localStrategy');
const LocalWithTaxStrategy = require('../domain/quoter/localWithTaxStrategy');

const gain = 1.3;
const IVA = 0.16;

router.get('/local', function(req, res, next) {
    const quoter = new quoterContext(new localStrategy(),gain);
 
    const amount = req.query.amount;
    const total = quoter.quote(amount);
 
    res.json(total);
 
 });

 router.get('/localWithTax', function(req, res, next) {
    const quoter = new quoterContext(new LocalWithTaxStrategy(IVA),gain);
 
    const amount = req.query.amount;
    const total = quoter.quote(amount);
 
    res.json(total);
 
 });

module.exports = router;


//Ejemplos de rutas
//http://localhost:3000/quoter/local?amount=10
//http://localhost:3000/quoter/local