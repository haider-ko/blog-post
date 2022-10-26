import React, { useState } from "react";
import PostsList from "./PostsList";
import { Button, Form, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editposts } from "./postsSlice";
const { TextArea } = Input;

const EditPosts = ({ id }) => {
  const [updatedTitle, setUpdatedTitle] = useState();
  const [updatedAuthor, setupdatedAuthor] = useState();
  const [updatedContent, setupdatedContent] = useState();
  console.log(id);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setUpdatedTitle(e.target.value);
  const onContentChanged = (e) => setupdatedContent(e.target.value);
  const onAuthorChanged = (e) => setupdatedAuthor(e.target.value);

  const posts = useSelector((state) => state.posts.posts);

  const onSave = (id) => {
    dispatch(
      editposts({
        updatedTitle,
        updatedAuthor,
        updatedContent,
        id,
      })
    );
    setUpdatedTitle("");
    setupdatedContent("");
    setupdatedAuthor("");
  };

  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item label="Post Title :">
          <Input
            placeholder="What's on your mind?"
            value={updatedTitle}
            onChange={onTitleChanged}
          />
        </Form.Item>

        <Form.Item label="Author :">
          <Input
            placeholder="Author"
            value={updatedAuthor}
            onChange={onAuthorChanged}
          />
        </Form.Item>

        <Form.Item label="Content">
          <TextArea
            rows={4}
            value={updatedContent}
            onChange={onContentChanged}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={() => onSave(id)}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditPosts;
