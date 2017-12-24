import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../import/collections/Bins';
import BinsEditor from './BinsEditor';
import BinsViewer from './BinsViewer';
import BinShare from './BinShare';

class BinsMain extends Component {

    render() {
        if ( !this.props.bin ) {
            return ( <div>Loading ...</div> );
        }

        return (
            <div>
                <BinsEditor bin={this.props.bin}/>
                <BinsViewer bin={this.props.bin}/>
                <BinShare bin={this.props.bin}/>
            </div>
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
