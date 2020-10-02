
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
//import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';
//import * as yup from 'yup';

function mapDispatchToProps(dispatch) {
    return {
        addPost: post => dispatch(addPost(post))
    }
}

//show text and pic


const ConnectedNewPost = function (props) {

    const [validated, setValidated] = useState(false);
    const [content, setContent] = useState("")
    const [tagsAsString, addTags] = useState("")
    const [file, addFile] = useState("")

    function handleChangeContent(e) {
        setContent(e.target.value)
        console.log("VALUE", e.target.value)
    }

    function handleChangeTag(e) {
        addTags(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (e.currentTarget.checkValidity() === false) {

            e.preventDefault();
            e.stopPropagation();
        }
        else {
            let tags = tagsAsString.split("-")

            
            props.addPost({
                content: content,
                author: "صورت زخمی",
                date: new Date().valueOf(),
                file: file,
                reaction: {
                    "&#128540": 0,
                    "&#128520": 0,
                    "&#128549": 0
                },
                like: 0,
                tags: tags
            });
            
             setContent(" ");
             addTags("");
             addFile("")
        }
        setValidated(true);
    }


    return (

        <Container className="newpost-holder">
            <Row>
                <div className="newpost-upperline">
                    <p>پست جدید</p>
                    <div className="devider"></div>
                </div>
            </Row>
            <Row className="text-input-holder">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="input-form-holder">
                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="contentInputForm">
                            <Form.Label>یه چیزی بنویس ...</Form.Label>
                            <Form.Control
                                required
                                className="post-text-content-input"
                                type="text"
                                name="contentInput"
                                value={content}
                                onChange={handleChangeContent}
                                maxLength={200}
                                placeholder="تا ۲۰۰ کاراکتر"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="12" controlId="tagsInputForm">
                            <Form.Label>تگ بذار</Form.Label>
                            <Form.Control
                                type="text"
                                name="tagsInput"
                                value={tagsAsString}
                                onChange={handleChangeTag}
                                maxLength={150}
                                placeholder="با خط فاصله جدا کن"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button className="submit-button" type="submit">بفرست</Button>
                </Form>
            </Row>
            <Row>
                <Col>
                    <p>فایل اضافه کن</p>
                </Col>

            </Row>
            <Row>
                preview
            </Row>
        </Container>

    )
}


const NewPost = connect(
    null,
    mapDispatchToProps
)(ConnectedNewPost);

export default NewPost;