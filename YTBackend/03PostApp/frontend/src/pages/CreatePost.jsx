import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {
    const navigation = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formdata=new FormData(e.target);
        axios.post('http://localhost:3000/create-post',formdata)
        .then((res)=> {
           
            navigation('/feed')
        })
        .catch(err => {
            console.log(err)
            alert('Error creating post')
        })
       
    }

  return (
    <section className='create-post'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" placeholder='Select Image' name='image' accept='image/*' />
            <input type="text" placeholder='Caption' name='caption' required />
            <button type='submit'>Submit</button>
        </form>

    </section>
  )
}

export default CreatePost