const express = require('express')
const router = express.Router();
const fs = require('fs');
const {addElement,check,checkArr,removeElement,modifyElement,getElements}=require('./DB.js')
//routers
//Cow API
router.post('/api/AddCow', async (req,res)=>{
    const { date, breed } = req.body;
    date?addElement('Cows','breed',breed,date):addElement('Cows','breed',breed)
    res.end();
});
router.get('/AddCow',(req,res)=>{
    res.render('AddCow');
});
router.post('/api/removeCow', async (req,res)=>{
    const {elementID} =req.body;
    console.log(elementID)
    removeElement('Cows',elementID);
    res.end();
    
});
router.post('/api/modifyCow', async (req,res)=>{
    const {elementID, date ,breed} =req.body;
    modifyElement('Cows',elementID,{date:date,breed:breed});
    res.end();
});
router.get('/api/cows', async (req,res)=>{
    res.send(getElements('Cows'));
});
router.get('/DeleteCow', async (req,res)=>{
    res.render('DeleteCow');
});
router.get('/ModifyCow', async (req,res)=>{
    res.render('ModifyCow');
});


//Milk API
router.post('/api/AddMilk', async (req,res)=>{
    const { date, milkAmount } = req.body;
    console.log(date,milkAmount)
    date?addElement('Milk','Amount', milkAmount,date):addElement('Milk','Amount',milkAmount)
    res.end();
});
router.post('/api/removeMilk', async (req,res)=>{
    const {elementID} =req.body;
    removeElement('Milk',elementID);
    res.end();
    
});
router.post('/api/modifyCow', async (req,res)=>{
    const {elementID, date ,breed} =req.body;
    modifyElement('Cows',elementID,{date:date,breed:breed});
    res.end();
});
router.get('/api/milk', async (req,res)=>{
    res.send(getElements('Milk'));
});
router.get('/AddMilk',(req,res)=>{
    res.render('AddMilk');
});
router.get('/DeleteMilk', async (req,res)=>{
    res.render('DeleteMilk');
});

//Diagnosis API
router.post('/api/AddDiag', async (req,res)=>{
    const { date, disease } = req.body;
    date?addElement('Diagnosis','disease',disease,date):addElement('Diagnosis','disease',disease)
    res.end();
});
router.post('/api/removeDiag', async (req,res)=>{
    const {elementID} =req.body;
    removeElement('Diagnosis',elementID);
    res.end();
    
});
router.get('/api/diag', async (req,res)=>{
    res.send(getElements('Diagnosis'));
});
router.get('/AddDiag',(req,res)=>{
    res.render('AddDiag');
});
router.get('/DeleteDiag', async (req,res)=>{
    res.render('DeleteDiag');
});

//Birth API
router.post('/api/AddBirth', async (req,res)=>{
    const {date,motherID} =req.body;
    date?addElement('Birth','motherId',motherID,date):addElement('Birth','motherId',motherID)
    res.end();
    
});
router.post('/api/removeBirth', async (req,res)=>{
    const {elementID} =req.body;
    removeElement('Birth',elementID);
    res.end();
    
});
router.get('/api/birth', async (req,res)=>{
    res.send(getElements('Birth'));
});
router.get('/AddBirth',(req,res)=>{
    res.render('AddBirth');
});
router.get('/DeleteBirth', async (req,res)=>{
    res.render('DeleteBirth');
});

router.post('/api/modifyBirth', async (req,res)=>{
    const {elementID, date ,motherId} =req.body;
    modifyElement('Birth',elementID,{date:date,motherId:motherId});
    res.end();
});
router.post('/api/modifyMilk', async (req,res)=>{
    const {elementID, date ,Amount} =req.body;
    modifyElement('Milk',elementID,{date:date,Amount:Amount});
    res.end();
});
router.post('/api/modifyDiag', async (req,res)=>{
    const {elementID, date ,disease} =req.body;
    modifyElement('Diagnosis',elementID,{date:date,disease:disease});
    res.end();
});
router.get('/ModifyBirth', async (req,res)=>{
    res.render('ModifyBirth');
});
router.get('/ModifyDiag', async (req,res)=>{
    res.render('ModifyDiag');
});
router.get('/ModifyMilk', async (req,res)=>{
    res.render('ModifyMilk');
});

module.exports = router;