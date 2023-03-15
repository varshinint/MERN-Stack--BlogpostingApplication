import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PostItem } from './PostItem'
import  './AddPost'
import { Link } from 'react-router-dom'

export const PostList = () => {

      const [postsdata , setpostsdata]=useState([])

      useEffect(()=>{

        axios.get('/api/post/getposts').then(res=>{
          console.log(res)
          setpostsdata(res.data)
        }).catch(err=>{
          console.log(err)
        })

      },[])
        const postlist=postsdata.map(post=>{
          return (
            <div className='row justify-content-center'>

               <PostItem post={post}/>
            </div>
          )
        })
  return (
    <div className='row justify-content-center'>
        <Link className='row justify-content-center'to={'/addpost'}> <li className='btn btn-info'>Add Blog</li></Link>
        <h3 className='row justify-content-center'>You can view the created Blogs below</h3>
        <div className='row justify-content-center'>{postlist}</div>
    </div>
  )
}
