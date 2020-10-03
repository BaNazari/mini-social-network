
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Link } from 'react-router-dom';
import { Row, Card, Container, Col, Badge, Button, InputGroup, DropdownButton, Dropdown, Form } from 'react-bootstrap';

import { modifyPost } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        modifyPost: modifiedPost => dispatch(modifyPost(modifiedPost))
    }
}

const ConennctedPost = function (props) {

    const item = props.currentPost;

    const [validated, setValidated] = useState(false);
    const [reaction0, setReaction0] = useState(item.reaction[0]);
    const [reaction1, setReaction1] = useState(item.reaction[1]);
    const [reaction2, setReaction2] = useState(item.reaction[2]);
    const [likes, setLike] = useState(item.like)
    const [comments, setComments] = useState(item.comments);
    const [commentAuth, setcommentAuth] = useState("");
    const [commentText, setcommentText] = useState("")

    useEffect(() => { updatePost() }, [reaction0, reaction1, reaction2, likes, comments])

    function handleChangeCAuthorName(e) {
        setcommentAuth(e.target.value);
    }

    function handleChangeCAuthorText(e) {
        setcommentText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (e.currentTarget.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            const commentSum = item.comments.concat({ commentAuthor: commentAuth, commentContent: commentText })
            setComments(commentSum)
            setcommentAuth("");
            setcommentText("");
        }
        setValidated(true);
        window.location.reload()
    }


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
            comments: comments
        }, item.id]);
    }

    function shareIt(e) {
        const url = `http://localhost:3000/posts/${item.id}`
        if(navigator.share) {
            navigator.share({
                url: url
            }).then(() => {
                console.log('Shared!')
            })
            .catch(console.error)
        }
        //Since navigator.share works only for https 
        else {
            console.log('Fake share!')
        }

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
                            <Dropdown.Item onClick={shareIt}>اشتراک‌گذاری در واتزاپ</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={shareIt}>اشتراک‌گذاری در توییتر</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </Col>
            </Row>
            {(props.currentPage === "postpage") &&
                <Container>
                    <Row>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="input-form-holder">
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="CAuthInputForm">
                                    <Form.Label>اسمت رو ثبت کن</Form.Label>
                                    <Form.Control
                                        required
                                        className=""
                                        type="text"
                                        name="CAuthInputForm"
                                        value={commentAuth}
                                        onChange={handleChangeCAuthorName}
                                        maxLength={50}

                                    />

                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="CTextInputForm">
                                    <Form.Label>نظرت چیه؟</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        className=""
                                        name="CTextInputForm"
                                        value={commentText}
                                        onChange={handleChangeCAuthorText}
                                        maxLength={150}

                                    />
                                </Form.Group>
                            </Form.Row>
                            <Button className="submit-button" type="submit">بفرست</Button>
                        </Form>
                    </Row>
                    {item.comments.map((comment) => (
                        <Row style={{ display: 'flex' }}>
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