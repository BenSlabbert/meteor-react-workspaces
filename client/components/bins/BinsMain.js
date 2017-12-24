import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../import/collections/Bins';
import BinsEditor from './BinsEditor';

class BinsMain extends Component {

    render() {
        return (
            <BinsEditor bin={this.props.bin}/>
        );
    }
}

export default createContainer( ( props ) => {
    const { binId } = props.match.params;
    Meteor.subscribe( 'bins' );

    return {
        bin: Bins.findOne( binId )
    }
}, BinsMain );
