import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Accounts from './Accounts';

class Header extends Component {

    constructor( props ) {
        super( props );
    }

    onBinClick( e ) {
        e.preventDefault();
        Meteor.call( 'bins.insert', ( err, binId ) => {
                if ( !err ) {
                    this.props.history.push( `/bins/${binId}` );
                }
            }
        );
    }

    render() {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markbin</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts/>
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind( this )}>Create bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
