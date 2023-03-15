import React  ,{useState} from 'react'
import  uniqid from  'uniqid'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const AddPost = () => {

  const[title , settitle]=useState('')
  const[imageurl , setimageurl]=useState('')
  const[description , setdescription]=useState('')
  
  const navigate = useNavigate()

  function addPost(){
    var post={
          title : title,
          imageurl : imageurl,
          description: description,
          postid: uniqid()
    }
   

      axios.post('/api/post/addnewpost',post).then(res=>{
          alert('Blog created successfully')
          navigate.go(0)
          
    }).then(err=>{
      console.log(err)
    })
  }
  
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div>
              <input type='text' placeholder='Blog Title' className='form-control'
              value={title} onChange={(e)=>{settitle(e.target.value)}}/>
              
              <input  type='text' placeholder='Related images URL' className='form-control'
              value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}}/>
              
              <textarea type='30' rows='10' placeholder='Type your Content here' className='form-control'
              value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
              

              <button onClick={addPost} type='button' className='btn btn-success float-left' > Save the Blog</button>
        </div>
      
    </div>
    </div>
  )
}
