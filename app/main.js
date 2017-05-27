'use strict';
const React = require('react');
const ReactDOM = require('react-dom')

import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactApp from './components/react-app.jsx'
import EmployeeDetail from './components/employee-detail.jsx'

ReactDOM.render(
	<HashRouter>
	 <Switch>
	    <Route exact path="/" component={ReactApp}/>
        <Route exact path="/employee/:id" component={EmployeeDetail}/>
     </Switch>
    </HashRouter>,
	document.getElementById('react')
)
