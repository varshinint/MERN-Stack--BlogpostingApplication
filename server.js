const express =require('express')
const app=express()
const dbfile=require('./conn')
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:'true'}))

const postroute =require('./routes/post')

// middleware
app.use(express.json());
app.use('/api/post' , postroute)



app.get('/' ,(req, res)=>{
    res.end("Helloworld this is backend !!")
})
app.listen(5000 , function(){
        console.log("Node js server and express  started")
})


