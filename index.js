const morgan =require('morgan')
const express = require('express');
const routes=require('./routes');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
    res.render('home')
});
app.use(routes);
app.get('/smoothies',(req,res)=>{
    res.render('smoothies');
})
app.get('/cowsPage',(req,res)=>{
    fetch('http://localhost:4000/api/cows')
  .then((response) => response.json())
  .then((data) =>res.render('cows',{Items:data.table}));
    
});
app.get('/milkPage',(req,res)=>{
    fetch('http://localhost:4000/api/milk')
  .then((response) => response.json())
  .then((data) =>res.render('milk',{Items:data.table}));
    
})
app.get('/diagPage',(req,res)=>{
    fetch('http://localhost:4000/api/diag')
  .then((response) => response.json())
  .then((data) =>res.render('diag',{Items:data.table}));
    
})
app.get('/birthPage',(req,res)=>{
    fetch('http://localhost:4000/api/birth')
  .then((response) => response.json())
  .then((data) =>res.render('births',{Items:data.table}));
    
})
app.listen(4000,()=>{
    console.log(`listening on port 4000 !!`)
});




