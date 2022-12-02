import { Button, Form, Input, Typography } from 'antd'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PostsList from './PostsList';
import { addPosts } from './postsSlice';
const { TextArea } = Input;
    

const AddPostForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const [title , setTitle] = useState();
    const [author , setAuthor] = useState();  //Author
    const [content , setContent] = useState();
    const [id, setId] = useState(0);

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setAuthor(e.target.value)
    
    const onSave = () => {
        dispatch(addPosts({
            title,
            author,
            content,
            id,

        }))
        setTitle('');
        setAuthor('');
        setContent('');
        setId((id)=> id + 1)
    }

  return (
    <div>
      <Typography.Title>Add a New Post</Typography.Title>
      <Form
      form={form}
      layout="vertical"
     
    >
    
      <Form.Item label="Post Title :" >
        <Input placeholder="What's on your mind?" 
        value={title}
        onChange={onTitleChanged}
        />
      </Form.Item>

      <Form.Item
        label="Author :"
        
      >
        <Input placeholder="Author"
        value={author}
        onChange={onAuthorChanged}
        />
      </Form.Item>
      

      <Form.Item label="Content">
      <TextArea rows={4} 
      value={content}
      onChange={onContentChanged}
      />
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={onSave}>Submit</Button>
      </Form.Item>
    </Form>

    <PostsList id={id}></PostsList>
    </div>
  )
}

export default AddPostForm
