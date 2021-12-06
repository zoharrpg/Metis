import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContentBoard from "../postboard/ContentBoard";
import contentContext from "../../context/content/contentContext";
import SideBar from "../sidebar/SideBar";
import CommentsControl from "../commentsComponents/commentsControl/CommentsControl";

const Content = (props) => {
  const ContentContext = useContext(contentContext);
  const { posts, getPosts } = ContentContext;
  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <ContentBoard
              key={123}
              post={{
                up: "???",
                down: "???",
                title: "Pending",
                content: "Pending state",
              }}
            />
            <ContentBoard
              key={123}
              post={{
                up: "???",
                down: "???",
                title: "Pending",
                content: "Pending state",
              }}
            />
            {posts != null &&
              posts.map((post) => {
                return <ContentBoard key={post.id} post={post} />;
              })}
          </Col>

          <Col md={{ span: 3, offset: 1 }}>
            <SideBar />
          </Col>
        </Row>
      </Container>

      <br />
      <br />

      {/*Use Container to make formate organize */}
      <Container>
        <Row>
          <Col md={8}>
            <CommentsControl />
          </Col>
        </Row>
      </Container>
    </>
  );
};

Content.propTypes = {};

export default Content;
