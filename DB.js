const e = require('express');
const fs = require('fs');
// geting the current date 
let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let currentDate=date+'-'+month+'-'+year;

async function addElement(file, elementType,element, date=currentDate){
    fs.readFile('./Data/'+file+'.json', 'utf8', function readFileCallback(err, data) { 
        if (err){
            throw new Error(err.message);
        } else {
        dataObj = JSON.parse(data); 
        try{
        const lastAdded = dataObj.table.at(-1).id;
        const Element = {id:lastAdded+1,date:date}
        Element[elementType]= element;
        dataObj.table.push(Element);  
        }
        catch{
        const Element = {id:0,date:date}
        Element[elementType]= element;
        dataObj.table.push(Element);  
        }
        json = JSON.stringify(dataObj); 
        fs.writeFile('./Data/'+file+'.json', json, 'utf8',(err)=>{if (err) throw new Error(err.message)}); // write it back 
}})
}
function check(file,toSearch)   {
    let index=-1
    let data = JSON.parse(fs.readFileSync('./Data/'+file+'.json', "utf8"));
    data.table.forEach((element,i) => {
        if (element.id===toSearch) index=i;
    });
    return index;
}
function checkArr(elementID,array){
    let index=-1;
    array.forEach((element,i)=>{
        if (element.id===elementID) index=i;
    });
    return index;
}

function removeElement(file,elementID){
    console.log(elementID)
    fs.readFile('./Data/'+file+'.json', 'utf8', function readFileCallback(err, data) { 
        if (err){
            throw new Error(err.message);
        } else {
        dataObj = JSON.parse(data); 
        const index=checkArr(elementID, dataObj.table);
        if (index!=-1) {
        dataObj.table.splice(index,1)
        json = JSON.stringify(dataObj); 
        fs.writeFile('./Data/'+file+'.json', json, 'utf8',(err)=>{if (err) throw new Error(err.message)}); 
    }
}})
}
function modifyElement(file,elementID,newElement){
    fs.readFile('./Data/'+file+'.json', 'utf8', function readFileCallback(err, data) { 
        if (err){
            throw new Error(err.message);
        } else {
        dataObj = JSON.parse(data); 
        const index=checkArr(elementID, dataObj.table);
        dataObj.table[index]={id:elementID,...newElement};
        json = JSON.stringify(dataObj); 
        fs.writeFile('./Data/'+file+'.json', json, 'utf8',(err)=>{if (err) throw new Error(err.message)}); // write it back 
}})
}
function getElements(file){
    return JSON.parse(fs.readFileSync('./Data/'+file+'.json', "utf8"));
}
module.exports={addElement,check,checkArr,removeElement,modifyElement,getElements}