
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Row, Container, Col } from 'react-bootstrap';
import Post from './Post'

const Timeline = function (props) {

    useEffect(() => { props.getData() }, [])
    
    const currentPage= "homepage"
    console.log("REND")

    return (
        <Container>
            <Row className="entire-timeline-holder-row">
                <Col md={12} sm={12} className="entire-timeline-holder-col">
                    {props.posts.map(item => (
                        <Post currentPage={currentPage} currentPost={item}/>
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

