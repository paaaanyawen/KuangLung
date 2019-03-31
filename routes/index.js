var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
 
    res.render('index', { title: '廣隆水電材料有限公司' });
});
router.get('/aboutus',function(req,res,next){
    res.render('aboutus', { title: '公司介紹' });
})
router.get('/contactus',function(req,res,next){
    res.render('contactus', { title: '聯絡我們' });
})
router.get('/product',function(req,res,next){
    res.render('product',{title:'產品分類'})
})
router.get('/product-infor',function(req,res,next){
    res.render('product-infor',{title:'產品名稱'})
})
module.exports = router;