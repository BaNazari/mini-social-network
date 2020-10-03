import React, { useEffect } from 'react';
import { Container, Media, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/index';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router'


const PostPage = function (props) {
    const postId = props.match.params.postId;
    useEffect(() => { props.getSinglePost(postId) }, [])
    const history = useHistory()
    console.log("PAGE", props)

    function homeReloader() {
        
        history.go(-1)
    }

    return (
        <div className="single-photo">
            <div onClick={homeReloader}>
                home
            </div>
            {props.singlePost[0] && props.singlePost[0].content}

        </div>
    )
}

function mapStateToProps(state) {
    return {
        singlePost: state.singlePost
    };
}

export default connect(
    mapStateToProps,
    { getSinglePost }
)(PostPage);