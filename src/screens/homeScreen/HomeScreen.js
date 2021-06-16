import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatagoriesBar from '../../components/catagoriesBar/CatagoriesBar'
import Video from '../../components/video/Video'

const HomeScreen = () => {
    return (
        <Container>
            <CatagoriesBar />
            <Row>
                {
                    [...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                        <Video />
                    </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default HomeScreen
