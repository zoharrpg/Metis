import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./postpage.css";
import contentContext from "../../context/content/contentContext";

const PostPage = (props) => {
  const [invalidTitle, setTitle] = useState(false);
  const [invalidContent, setContent] = useState(false);
  const [post, setPost] = useState({
    title: "",
    content: "",
    img: "",
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

    ContentContext.createPost(post);
    window.location.href = "/";
  };

  const onReturn = () => {
    window.location.href = "/";
  };

  return (
    <div className="container-fluid">
      <Form className="mt-5 shadow">
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
        <Row className="text-center mt-3">
          <Col>
            <Button variant="success" className="btn-lg" onClick={onSubmit}>
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
