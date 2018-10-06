var express=require('express');

var hbs=require('hbs');

var app=express();

app.set('view engine', hbs)
app.use(express.static(__dirname+ "/public"));


app.get('/',(req,resp)=>{
    resp.send("Tanu brush aagete");

});

app.listen(3000);