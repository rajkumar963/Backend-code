import React from 'react'
import {useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = React.useState([
        {
            _id: '1',
            image: 'https://ik.imagekit.io/grh1ml4qt/image_VD4XmKyOS.jpg',
            caption: 'First Post',
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res)=> {
            console.log(res.data)
            setPosts(res.data.posts)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <section className='feed'>
        <h1>Feed</h1>
        {
            posts.length > 0 ?
            (posts.map(post => (
                <div key={post._id}>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))):(
                <p>No posts yet</p>
            )
        }
    </section>
  )
}

export default Feed;