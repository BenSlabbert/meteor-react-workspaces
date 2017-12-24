import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../import/collections/Bins';

class BinsMain extends Component {

    render() {
        return (
            <div>bins main</div>
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
