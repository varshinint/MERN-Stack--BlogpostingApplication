import './App.css';
import React from 'react';
import {PostList}  from './PostList';
import {AddPost}  from './AddPost';
import {EditPost}  from './EditPost';
import {BrowserRouter, Route , Routes } from 'react-router-dom'
import  {bootstrap} from'../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <React.Fragment>
            
            <h1 style={{backgroundColor : 'black' , color:'white' , padding:'10px' , textAlign:'center'}} > MERN STACK : BLOG POSTING APPLICATION </h1>
            
            <main>

            
            <Routes>
            <Route path='/'  element={<PostList/>}exact/>
            <Route path='/addPost' element={<AddPost/>} exact/>
            <Route path='/editpost/:postid' element={<EditPost/>} exact/>
            </Routes>
            
            </main>
            
            
            </React.Fragment>
  );
}

export default App;
