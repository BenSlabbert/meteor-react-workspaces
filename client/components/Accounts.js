import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

    // called once rendered once
    componentDidMount() {
        this.view = Blaze.render( Template.loginButtons,
            ReactDOM.findDOMNode( this.refs.container ) );
    }

    // called before removed from the screen
    componentWillUnmount() {
        Blaze.remove( this.view );
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;
