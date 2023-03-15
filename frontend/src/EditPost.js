import React, { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const EditPost = () => {

 
    const params= useParams()
    const navigate=useNavigate()

    const[title , settitle]=useState('')
    const[imageurl , setimageurl]=useState('')
    const[description , setdescription]=useState('')
  
    useEffect(()=>{
          axios.post('/api/post/getpostdata' , {postid: params.postid}).then(res=>{
            console.log(res.data)
            const postdata =res.data
            console.log(postdata)

            settitle(postdata.title)
            setimageurl(postdata.imageurl)
            setdescription(postdata.description)
            
          }).catch(err=>{
            console.log(err)
          }) 
        
  },[])
  function editpost(){
    const updatedpost ={
              title:title,
              imageurl: imageurl,
              description: description,
              postid: params.postid
            }

            axios.post('/api/post/updatepost' , updatedpost).then(res=>{
              console.log(res)
              alert('Blog updated successfully')
              

            
            }).catch(err=>{
              console.log(err)
            })
  }
  

  return (
    <div className='row justify-content-center'>
      <h1 className='m-3'> Edit  the Blog id : {params.postid}</h1>
      <div className='col-md-6'>
        
      <div>
            <input type='text' placeholder='Blog Title' className='form-control'
            value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            
            <input type='text' placeholder='Related images URL' className='form-control'
            value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}}/>
            
            <textarea type='30' rows='10' placeholder='Type your Content here' className='form-control'
            value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
            

            <button onClick={editpost} type='button' className='btn btn-success float-left' > Save The Update</button>
      </div>
    
  </div>
  </div>
  )
}
