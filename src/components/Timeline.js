
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Link } from 'react-router-dom';

const Timeline = function (props) {
  
    useEffect(()=> {props.getData()},[])

    return (
        <div>
            {props.posts.map(item => (
                <Link to={`/posts/?:${item.id}`} key={item.id}>
                    {item.content} jlkjl
                </Link>
            ))}
        </div>
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

