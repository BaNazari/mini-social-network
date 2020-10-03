
import React from 'react';
import { connect } from 'react-redux';
import { getData } from "../actions/index";
import { Link } from 'react-router-dom'

export class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // calling the new action creator
        console.log("DB", this.props.getData())
        this.props.getData();
    }

    render() {
        console.log("HOW")
        return (
            <div>
                {this.props.posts.map(item => (
                    <Link to={`/posts/?:${item.id}`} key={item.id}>
                        {item.content} jlkjl
                    </Link>
                ))}
            </div>
        );
    }
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

