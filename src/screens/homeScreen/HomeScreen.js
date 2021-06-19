import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CatagoriesBar from "../../components/catagoriesBar/CatagoriesBar";
import Video from "../../components/video/Video";
import { getPopularVideos } from "../../redux/action/videos.action";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const {videos} = useSelector(state => state.homeVideos)

  return (
    <Container>
      <CatagoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video  video={video} key={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
