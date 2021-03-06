const express = require('express');
const router = express.Router();



const Sales = require('../models/sale.js');



//Get all sales
router.get('/sales', function(req, res, next){
    Sales.find(function(err, s){
        res.json(s)
    });
});
//Get all sales with product Id
router.get('/sales/:productId', function(req, res, next){
    Sales.find({prodId: req.params.productId}, function(err, s){
        if (err)
            res.json(err);
        else
            res.json(s);
    });
});
//Add new sale
router.post('/addSale', function(req, res, next){
    let newSale = new Sales({
        id: req.body.id,
        prodId: req.body.prodId,
        qty: req.body.qty,
        date: req.body.date,
    });
    newSale.save(function(err, sale){
        if(err){
            res.json({msg: 'Failed to add sale'});
        }else{
            res.json({msg: 'Sale added successfully'})
        }
    });
});
//Edit existed sale by id
router.put('/editSale/:id', function(req, res, next){
    let updatedSale = new Sales({
        id: req.body.id,
        prodId: req.body.prodId,
        qty: req.body.qty,
        date: req.body.date,
    });
    Sales.findOne({_id: req.params.id}, function(err, foundObject){
        if(err){
            res.json(err);
        }else{
            if(foundObject){
                if(updatedProduct.name){
                    foundObject.name = req.body.name;
                }
                if(updatedProduct.price){
                    foundObject.price = req.body.price;
                }
                if(updatedProduct.stock){
                    foundObject.stock = req.body.stock;
                }
                foundObject.save(function(err, updatedObject){
                    if(updatedObject){
                        console.log("Updated 1")
                        res.json({msg: 'Product editted successfully'})
                    }else{
                        console.log("Updated 2");
                        res.json({msg: 'Fail to edit document'})
                    }
                });
            }
        }
    });
});
// Delete product by id
router.delete('/delSale/:id', function(req, res, next){
    Sales.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
    
});
// List sales by month
router.get('/saleByMonth/:month/:year', function(req, res, next){
    
    var firstDay = new Date(req.params.year, req.params.month, 1);
    var lastDay = new Date(req.params.year,req.params.month,31);
    console.log(firstDay);
    Sales.find({date : {$gte:firstDay, $lte:lastDay}}, function(err, s) {
        if(err){
            res.json(err);
        }else{
            res.json(s)
        }
    });
});

// List sales by week
router.get('/saleByWeek/:date/:month/:year', function(req, res, next){
    var firstDay = new Date(req.params.year,req.params.month, req.params.date-7);
    var lastDay = new Date(req.params.year, req.params.month, req.params.date);
    console.log(firstDay);
    console.log(lastDay);
    Sales.find({date : {$gte:firstDay, $lte:lastDay}}, function(err, s) {
        if(err){
            res.json(err);
        }else{
            res.json(s)
        }
    });
});
module.exports = router;
