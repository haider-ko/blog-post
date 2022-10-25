import { Card, Typography } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PostsList = () => {
  
    const posts = useSelector((state)=>state.posts.posts)
    const dispatch = useDispatch();  

    const SavedPosts = posts.map((post)=>{
        return post.content
    })

    return (
    <>
        <Typography.Title>Posts</Typography.Title>
            { posts.map((post)=>{
        return (
            <>
            <Card

            title={post.title}
            
            style={{
              width: 300,
              padding: '2px'
            }}
          >
            <p>by <b>{post.author}</b></p>
            <p>{post.content}</p>
            
          </Card>
          <br></br>
          </>
        )
    })}
       
    </>
  )
}

export default PostsList;
