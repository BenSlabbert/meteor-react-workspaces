import React from 'react'
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';
import Bins from '../import/collections/Bins';

const routes = (
    <BrowserRouter>
        <div>
            <Route path={'/'} component={App}/>
        </div>
    </BrowserRouter>
);

Meteor.startup( () => {
    ReactDOM.render( routes, document.querySelector( '.render-target' ) )
} );
