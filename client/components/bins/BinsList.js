import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom'

import { Bins } from "../../../import/collections/Bins";

class BinsList extends Component {

    onBinRemove( bin ) {
        Meteor.call( 'bins.remove', bin );
    }

    renderList() {
        return this.props.bins.map( ( bin ) => {
                let url = `/bins/${bin._id}`;
                return (
                    <li className="list-group-item"
                        key={bin._id}>
                        <Link to={url}> Bin: {bin._id}</Link>
                        <span className="pull-right">
                            <button className="btn btn-danger"
                                    onClick={() => {
                                        this.onBinRemove( bin )
                                    }}>
                                Remove
                            </button>
                        </span>
                    </li>
                );
            }
        )
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default createContainer( () => {
    Meteor.subscribe( 'bins' );
    Meteor.subscribe( 'sharedBins' );

    return {
        bins: Bins.find( {} ).fetch()
    };
}, BinsList );
