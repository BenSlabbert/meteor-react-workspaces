import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import BinsMain from '../components/bins/BinsMain'
import BinsList from '../components/bins/BinsList'

export default ( props ) => {
    return (
        <div>
            <Header history={props.history}/>
            <Switch>
                <Route exact path='/' component={BinsList}/>
                <Route path='/bins/:binId' component={BinsMain}/>
            </Switch>
        </div>
    );
}
