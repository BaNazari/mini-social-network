
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Link } from 'react-router-dom';

import { Row, Card, Container, Col, Badge, Button } from 'react-bootstrap'

const Timeline = function (props) {

    useEffect(() => { props.getData() }, [])

    return (
        <Container>
            <Row className="entire-timeline-holder-row">
                <Col md={12} sm={12} className="entire-timeline-holder-col">
                    {props.posts.map(item => (
                        <Card className="post-card-timeline">
                            <Row>
                                {item.date}
                            </Row>
                            <Row>
                                {item.author} نوشت:
                            </Row>
                            <Link to={`/posts/${item.id}`} key={item.id}>
                                <Card.Body>
                                    <Card.Text>
                                        {item.content}
                                    </Card.Text>
                                    <Card.Img variant="top" src={item.file} />
                                </Card.Body>
                            </Link>

                            <Row style={{ display: 'flex' }}>
                                {item.tags.map((tag) => (<Badge variant="secondary">{tag}</Badge>))}
                            </Row>
                            <Row>
                                <Col md={4} sm={12}>
                                    <Row>
                                        <Col>
                                            <Button>
                                                <Badge variant="light">9</Badge>
                                                &#129321;
                                            </Button>
                                            <Button>
                                                <Badge variant="light">9</Badge>
                                                &#129314;
                                            </Button>
                                            <Button>
                                                <Badge variant="light">9</Badge>
                                                &#129299;
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3} sm={12}>com</Col>
                                <Col md={3} sm={12}>sha</Col>
                            </Row>
                        </Card>

                    ))}
                </Col>
            </Row>
        </Container>
    );
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(Timeline);

