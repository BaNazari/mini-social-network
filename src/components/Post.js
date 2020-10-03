
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Link } from 'react-router-dom';
import { Row, Card, Container, Col, Badge, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';

import { modifyPost } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        modifyPost: modifiedPost => dispatch(modifyPost(modifiedPost))
    }
}

const ConennctedPost = function (props) {

    const item = props.currentPost;

    const [reaction0, setReaction0] = useState(item.reaction[0]);
    const [reaction1, setReaction1] = useState(item.reaction[1]);
    const [reaction2, setReaction2] = useState(item.reaction[2]);
    const [likes, setLike] = useState(item.like)

    const [comments, setComments] = useState([item.comments]);

    useEffect(() => { updatePost() }, [reaction0, reaction1, reaction2, likes])

    function updatePost() {
        props.modifyPost([{
            content: item.content,
            author: item.author,
            date: item.date,
            file: item.file,
            reaction: [reaction0, reaction1, reaction2]
            ,
            like: likes,
            tags: item.tags,
            comments: []
        }, item.id]);
    }


    return (
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
                            <Button onClick={() => setReaction0(reaction0 + 1)}>
                                <Badge variant="light">{reaction0}</Badge>
                              &#129321;
                          </Button>
                            <Button onClick={() => setReaction1(reaction1 + 1)}>
                                <Badge variant="light">{reaction1}</Badge>
                              &#129314;
                          </Button>
                            <Button onClick={() => setReaction2(reaction2 + 1)}>
                                <Badge variant="light">{reaction2}</Badge>
                              &#129299;
                          </Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={2} sm={12}>
                    <Button>
                        <Badge variant="light">{item.comments.length}</Badge>
                      &#128172;
                  </Button>
                </Col>
                <Col md={2} sm={12}>
                    <Button onClick={() => setLike(likes + 1)}>
                        <Badge variant="light">{likes}</Badge>
                        &#128077;
                  </Button>
                </Col>

                <Col md={3} sm={12}>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title="اشتراک‌گذاری"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
            </Row>
            {(props.currentPage === "postpage") &&
                <Container>
                    <Row>
                        Form here
                    </Row>
                    {item.comments.map((comment) => (
                        <Row>
                            <Row>
                                {comment.commentAuthor}
                            </Row>
                            <Row>
                                {comment.commentContent}
                            </Row>
                        </Row>
                    ))}
                </Container>
            }
        </Card>
    )
}

const Post = connect(
    null,
    mapDispatchToProps
)(ConennctedPost);

export default Post;