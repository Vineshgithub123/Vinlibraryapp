const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const{bookslist,signupdetails} = require('./src/model/model')
const bodyparser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/LIBRARYAPP');

// const Booklists = require('./src/model/model');
// const signupdetails= require('./src/model/userdatamodel')
const jwt = require('jsonwebtoken')
const app = new express();
app.use(cors());
app.use(bodyparser.json())






app.post('/insert',function(req,res){
console.log(req.body._id);
  var products={
    Imageurl:req.body.item.Imageurl,
    Authorname:req.body.item.Authorname,
    Genre:req.body.item.Genre,
    Bookcode:req.body.item.Bookcode,
    Bookname:req.body.item.Bookname
  }
  var product = new Booklists(products);
  product.save()
})
app.get('/Books',function(req,res){

  bookslist.find()
  .then(function(books){
      res.send(books)
  })

})

  app.get('/:id',(req,res)=>{
    const id =req.params.id;
    bookslist.findOne({"_id":id})
    .then((books)=>{
      res.send(books);
    })

  })

  

  app.delete('/remove/:id',(req,res)=>{
    id=req.params.id;
    bookslist.findByIdAndRemove({"_id":id})
    .then(()=>{
      console.log('success')
      res.send();
    })
  })



  app.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id
    Bookcode=req.body.Bookcode,
    Imageurl=req.body.Imageurl,
    Authorname=req.body.Authorname,
    Genre=req.body.Genre,
    Bookname=req.body.Bookname
    bookslist.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "Bookcode":Bookcode,
                                "Imageurl":Imageurl,
                                "Authorname":Authorname,
                                "Genre":Genre,
                                "Bookname":Bookname,
                                }})
   .then(function(){
       res.send();
   })
 })
 app.delete('/remove/:id',(req,res)=>{
   id= req.params.id;
   bookslist.findByIdAndDelete({"_id":id})
   .then(()=>{
     console.log('success');
     res.send();
   })
 })


 app.post('/Signup',function(req,res){
console.log('hh');
  var newusers ={
    
    fullname: req.body.users.fullname,
    mobile:req.body.users.mobile,
    email:req.body.users.email,
    password:req.body.users.password
}  
var newuser = new signupdetails(newusers);
console.log(newuser);
newuser.save();
   });

  //  app.post('/insert',function(req,res){
  //   console.log(req.body._id);
  //     var products={
  //       Imageurl:req.body.item.Imageurl,
  //       Authorname:req.body.item.Authorname,
  //       Genre:req.body.item.Genre,
  //       Bookcode:req.body.item.Bookcode,
  //       Bookname:req.body.item.Bookname
  //     }
  //     var product = new Booklists(products);
  //     product.save()
  //   })


app.post('/login',function(req,res){
  console.log(req.body);
var email = req.body.email;
var password = req.body.password
console.log(email);
signupdetails.findOne({email})
.then(users=>{
  console.log(users);

  if(users&&users.password==password){
  return res.json('success')
  }else{
    res.status(401).send('Please Enter Email andPassword')
  }
})



})


app.listen(3000,function(){
  console.log('running on port 3000');
});