//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const request= require("request");
const app= express();
const https= require("https");

app.use(bodyParser.urlencoded({extended:true}));

//to make our server use static files such as css and images we use this express folder
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
  const firstName= req.body.fName;
  const lastName= req.body.lName;
  const fullName= firstName+" "+lastName;
  const email= req.body.email;
  const data ={
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME:firstName,
          LNAME:lastName
        }

      }
    ]
  }
});

const jsonData=JSON.stringify(data);

https.request(url,options,function(response){
  const url= 
});

app.listen(3000, function(){
  console.log("Server is up and running");
});


//API key
//6f562cb6a6e0e5b32e9b6534bb2ded71-us17

//ListId
//9fda53d494
