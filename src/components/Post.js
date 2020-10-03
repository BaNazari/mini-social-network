
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Link } from 'react-router-dom';
import { Row, Card, Container, Col, Badge, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'


 const Post = function (props) {
     const item = props.currentPost;
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
                              <Button>
                                  <Badge variant="light">{item.reaction[0]}</Badge>
                              &#129321;
                          </Button>
                              <Button>
                                  <Badge variant="light">{item.reaction[1]}</Badge>
                              &#129314;
                          </Button>
                              <Button>
                                  <Badge variant="light">{item.reaction[2]}</Badge>
                              &#129299;
                          </Button>
                          </Col>
                      </Row>
                  </Col>
                  <Col md={3} sm={12}>
                      <Button>
                          <Badge variant="light">9</Badge>
                      &#128172;
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
                              <Dropdown.Item href="#">Action</Dropdown.Item>
                              <Dropdown.Item href="#">Another action</Dropdown.Item>
                              <Dropdown.Item href="#">Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item href="#">Separated link</Dropdown.Item>
                          </DropdownButton>
                      </InputGroup>
                  </Col>
              </Row>
              {(props.currentPage === "postpage")&& <Row>
                  comments
              </Row>}
          </Card>
     )
 }
 export default Post