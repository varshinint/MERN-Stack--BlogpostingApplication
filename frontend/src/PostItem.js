import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { EditPost } from './EditPost'


export const PostItem = ({post}) => {
  
   


  function deletePost(postid){
    axios.post('/api/post/deletepost' , {postid:postid}).then(res=>{
      alert('Blog deleted successfully')
        
    }).catch(err=>{
      console.log(err)
    })
  }

 


  return (
    <div  class="shadow p-3 mb-5 bg-white rounded"  > 
        <h1>{post.title}</h1>
        <img src ={post.imageurl}/>
        <p> {post.description} </p>

        
        <Link to={`/editpost/ ${post.postid}`}> <li className='btn btn-info'>Edit Blog</li></Link>
        <button onClick={()=>{deletePost(post.postid)}} className='btn btn-danger'> Delete Blog </button>
    </div>
  )
}