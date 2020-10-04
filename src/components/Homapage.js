import React, { useState } from 'react';
import Timeline from './Timeline';
import NewPost from './NewPost';
import { Container, Row, Col, Button } from 'react-bootstrap'
import avaImg from '../assets/avatar.jpeg';


const Homepage = function () {


    const [loggendIn, setLogin] = useState(true)


    return (

        <Container  className="homepage-container">
            <Row >
                <h3 className="headline"> مینی فیس‌بوک</h3>
            </Row>

            <Row>
                <Col md={4} sm={12} className="avatar-area">
                    <Col>
                        {loggendIn && <div className="avatar-holder">
                            <div className="avatar-name">
                                <p >صورت زخمی</p>
                            </div>
                            <img className="avatar-image" src={avaImg}></img>
                        </div>}
                        <div className="login-button">
                            <Button variant="info" onClick={() => setLogin(!loggendIn)}>{loggendIn ? "لاگ‌اوت" : "لاگین"}</Button>
                        </div>
                    </Col>
                </Col>
                <Col md={7} sm={12} className="post-area">
                    {loggendIn && <NewPost ></NewPost>}
                    <Timeline ></Timeline>
                </Col>
            </Row>
        </Container>
    )
}



export default Homepage