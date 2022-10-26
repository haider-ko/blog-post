import { Card, Modal, Space, Typography } from 'antd';
import { DeleteOutlined, EditOutlined} from '@ant-design/icons';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteposts } from './postsSlice';
import EditPosts from './EditPosts';

const PostsList = ({id}) => {
  
    const posts = useSelector((state)=>state.posts.posts)
    const dispatch = useDispatch();  

    const onDelete = (id) =>{
        console.log(id)
        dispatch(deleteposts(id))
    }
    
    
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
            <Space><DeleteOutlined onClick={()=>onDelete(post.id)}/>
            <EditOutlined onClick={showModal} />
            </Space>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <EditPosts id={id}></EditPosts>
      </Modal>
            
            
          </Card>
          <br></br>
          </>
        )
    })}
       
    </>
  )
}

export default PostsList;
