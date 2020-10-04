import React, { useEffect } from 'react';
import { Container, Media, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/index';
import Post from './Post'

const PostPage = function (props) {
    const postId = props.match.params.postId;
    useEffect(() => { props.getSinglePost(postId) }, [])
    //const history = useHistory()
    const currentPage = "postpage"
    console.log("PAGE", props)

    // function homeReloader() {

    //     history.go(-1)
    // }

    return (
        <Container className="single-photo">
            <Row as={Col} md="10" sm="12">
                <Col md="8" sm="12" style={{margin:'auto'}}>
                    {props.singlePost[0] && <Post currentPage={currentPage} currentPost={props.singlePost[0]} />}
                </Col>
            </Row>
        </Container>
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