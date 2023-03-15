const express= require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Schema= mongoose.Schema;


const postschema= new Schema({
    title: String,
    imageurl : String,
    description : String,
    postid: String
})



const postModel =mongoose.model('Posts' , postschema)

router.post('/addnewpost',async(req, res)=>{

          try{  
            const newpost=new postModel({
                title: req.body.title,
                imageurl: req.body.imageurl,
                description : req.body.description,
                postid: req.body.postid
            })
           

            await newpost.save();

            res.json(newpost)
        }
        catch(err){
            res.send('Error ' + err)
        }
})

router .get('/getposts' , async(req,res)=>{
    
    try{
    const getpost=await postModel.find()
    res.json(getpost)
    }
    catch(err){
            res.send('error'+ err)
    }
    
})
router.post('/deletepost' ,async(req, res)=>{
     try{
        const deletepost= await postModel.findOneAndDelete({postid:req.body.postid})
        res.json(deletepost)
      }
      catch(err){
                res.send('error' +err)
            }

        
})
router.post('/getpostdata' ,async(req, res)=>{

        
    
    await postModel.find({postid:req.params.postid}, (docs ,err)=>{
      if(!err){  
       res.send(docs)
      }
      else{
        res.send(err)
      }
    })
     
    

       
})
router.post('/updatepost' ,async(req, res)=>{

        
    
       await postModel.findOneAndUpdate({postid:req.params.postid},{
          title:req.body.title,
          imageurl:req.body.imageurl,
          description: req.body.description
       },(err)=>{
                if(!err){
                    res.send("post updated successfully")
                }
                else{
                    res.send(err)
                }
       })

       
    })            
     

       



module.exports=router