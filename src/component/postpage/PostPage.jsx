import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./postpage.css";
import contentContext from "../../context/content/contentContext";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const PostPage = (props) => {
  const [invalidTitle, setTitle] = useState(false);
  const [invalidContent, setContent] = useState(false);
  const [invalidDays, setDays] = useState(false);
  const [post, setPost] = useState({
    title: "",
    content: "",
    img: "",
    days: 0,
  });
  useEffect(() => {}, [invalidTitle]);
  const ContentContext = useContext(contentContext);

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (post.title.length === 0) {
      setTitle(true);
      return;
    }
    setTitle(false);
    if (post.content.length === 0) {
      setContent(true);
      return;
    }
    setContent(false);
    if (isNaN(post.days) || post.days < 0) {
      setDays(true);
      return;
    }
    setDays(false);

    ContentContext.createPost(post);
    window.location.href = "/";
  };

  const onReturn = () => {
    window.location.href = "/";
  };

  const draProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="container-fluid">
      <Form className="shadow">
        <Form.Group className="mb-3" hasValidation>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="TITLE"
            name="title"
            onChange={onChange}
            isInvalid={invalidTitle}
          />
          <Form.Control.Feedback type="invalid">
            This input can not be empty !!!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            onChange={onChange}
            isInvalid={invalidContent}
          />
          <Form.Control.Feedback type="invalid">
            This input can not be empty !!!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Days before end voting</Form.Label>
          <Form.Control
            as="input"
            rows={3}
            name="days"
            onChange={onChange}
            isInvalid={invalidDays}
          />
          <Form.Control.Feedback type="invalid">
            This input can not be empty or less than 0 !!!
          </Form.Control.Feedback>
        </Form.Group>

        <Dragger {...draProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>

        <Row className="text-center mt-3">
          <Col>
            <Button variant="primary" className="btn-lg" onClick={onSubmit}>
              Submit
            </Button>
          </Col>
          <Col>
            <Button variant="danger" className="btn-lg" onClick={onReturn}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PostPage;
