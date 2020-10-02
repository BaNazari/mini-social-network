
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        addPost: post => dispatch(addPost(post))
    }
}

//show text and pic
//tags: && content

const ConnectedNewPost = function (props) {

    const [content, setContent] = useState("")
    const [tags, addTags] = useState([])
    const [file, addFile] = useState("")

    function handleChangeContent(e) {
        setContent(e.target.value)
        console.log("VALUE", e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    
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
                tags:tags

         });
        console.log("TITLE", content)
        setContent("");
        addTags([]);
        addFile("")

    }

    return (

        <Container className="newpost-holder">
            <Row>
                <div className="newpost-upperline">
                    <p>پست جدید</p>
                    <div className="devider"></div>
                </div>
            </Row>
            <Row>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="post-body"></label>
                        <input
                            type="text"
                            id="post-body"
                            placeholder="چی تو ذهنته؟ 200 کاراکتر بنویس."
                            value={content}
                            onChange={handleChangeContent}
                        />
                    </div>
                    <div>
                        add tag
                    </div>
                    <button type="submit">SAVE</button>
                </form>
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