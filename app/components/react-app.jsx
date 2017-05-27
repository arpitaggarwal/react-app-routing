'use strict';
const React = require('react');
var axios = require('axios');

import EmployeeList from './employee-list.jsx'
import AddEmployee from './add-employee.jsx'

export default class ReactApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
		this.addEmployee = this.addEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);
		this.Axios = axios.create({
		    baseURL: "/employee",
		    headers: {'content-type': 'application/json', 'creds':'user'}
		});
	}

	componentDidMount() {
		let _this = this;
		this.Axios.get('/get')
		  .then(function (response) {
		     console.log(response);
		    _this.setState({employees: response.data});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	
	addEmployee(employeeName){

		let _this = this;
		this.Axios.post('/add', {
        	name: employeeName
         })
		  .then(function (response) {
		    console.log(response);
		    _this.setState({employees: response.data});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
    }
    
    deleteEmployee(employeeName){
        let _this = this;
        this.Axios.post('/delete', {
        	name: employeeName
          })
          .then(function (response) {
        	_this.setState({employees: response.data});
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
	render() {
		return (
				<div>
				  <AddEmployee addEmployee={this.addEmployee}/>
				  <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
		        </div>
			)
	}
}