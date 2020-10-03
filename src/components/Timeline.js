
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Link } from 'react-router-dom';
import { Row, Card, Container, Col, Badge, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import Post from './Post'

const Timeline = function (props) {

    useEffect(() => { props.getData() }, [])
    
    const currentPage= "homepage"

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

