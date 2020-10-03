
import React, { useState } from 'react';
import { Container, Row, Col, Form, Media, Button } from 'react-bootstrap';
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
    const [photoFile, addFile] = useState("")

    function handleChangeContent(e) {
        setContent(e.target.value)
        console.log("VALUE", e.target.value)
    }

    function handleChangeTag(e) {
        addTags(e.target.value)
    }


    function imageImporter() {
        const fileSelect = document.getElementById("fileSelect"),
            fileElem = document.getElementById("fileElem");
        if (fileElem) {
            fileElem.click();
        }

        console.log(fileElem)
        fileElem.onchange = function () {
            const reader = new FileReader();
            reader.readAsDataURL(fileElem.files[0]);
            reader.onload = function () {
                console.log("RED", reader)
                addFile(reader.result)
            }
            reader.onerror = function () {
                alert("فایل عکس مناسب اضافه کن");
            };
        };


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
                file: photoFile,
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
            <Row className="file-adder-holder">
                <input type="file" id="fileElem" accept="image/*" style={{ display: "none" }}></input>
                <button className="btn browse-btn" id="fileSelect" onClick={imageImporter}>&#x1F3DE; +</button>

            </Row>
            <Row>
                {photoFile&&<div>
                    <img
                        width='auto'
                        height={80}
                        className="mr-3"
                        src={photoFile}
                    />
                    <Button className="photo-remove-button" variant="danger" onClick={() => addFile("")}> - </Button>
                </div>}

            </Row>
            <Row style={{ backgroundColor: 'white' }}>
                <Col md={6} style={{ margin: 'auto', position: 'absolute', bottom: '10px', right: '25%' }}>

                </Col>
            </Row>
        </Container>

    )
}


const NewPost = connect(
    null,
    mapDispatchToProps
)(ConnectedNewPost);

export default NewPost;