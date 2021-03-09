import React, { Component } from 'react'

class About extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Animesh',
            age: 30
        }
    }

    componentDidMount() {
        // console.log('component did mount');
        console.log(this.props);
    }

    componentDidUpdate() {
        // console.log('object', this.state);
        console.log(this.props);
    }

    render() {
        const { name } = this.props;

        return (
            <div>
                <p>About - Class Component</p>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default About
