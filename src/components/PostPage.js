import React from 'react';
import { Container, Media, Col, Row } from 'react-bootstrap';


const PostPage = function () {
    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://picsum.photos/id/237/200/300"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Media Heading</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                    </p>
                        </Media.Body>
                    </Media>
                </Col>
                <Col md={5} sm={12}>
                    <Media>
                        <Media.Body>
                            <h5>Media Heading</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            </p>
                        </Media.Body>
                    </Media>
                    <Media>
                        <Media.Body>
                            <h5>Media Heading</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            </p>
                        </Media.Body>
                    </Media>
                    <Media>
                        <Media.Body>
                            <h5>Media Heading</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            </p>
                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        </Container>
    )
}

export default PostPage