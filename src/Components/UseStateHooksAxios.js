import React, { useState,useEffect } from 'react'
import axios from 'axios'

function UseStateHooksAxios() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromBtnClick,setIdFromBtnClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[idFromBtnClick])
    const handleClick=()=>{
        setIdFromBtnClick(id)
    }
    return (
        <div>
            <input value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Click To Change Value</button>
            <div>{post.title}</div>
            {/* {post.map(posts => <li key={posts.id}>
                {posts.title}
            </li>)} */}
        </div>
    )
}

export default UseStateHooksAxios
