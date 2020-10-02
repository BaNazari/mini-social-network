
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        addPost: post => dispatch(addPost(post))
    }
}


//send the whole post

const ConnectedNewPost = function (props) {

    const [content, setContent] = useState("")
    const [tags, addTags] = useState([])

    function handleChange(e) {
        setContent(e.target.value)
        console.log("VALUE", e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addPost({ content });
        console.log("TITLE", content)
        setContent("")
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="post-body">Title</label>
                <input
                    type="text"
                    id="post-body"
                    value={content}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>
    )
}


const NewPost = connect(
    null,
    mapDispatchToProps
)(ConnectedNewPost);

export default NewPost;