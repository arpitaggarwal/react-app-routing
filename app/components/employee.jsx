const React = require('react');
import DeleteEmployee from './delete-employee.jsx'
import { Link } from 'react-router-dom';

export default class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.id}</td>
				<td>{this.props.employee.name}</td>
				<td>{this.props.employee.department}</td>
				<td><DeleteEmployee deleteEmployee={this.props.deleteEmployee}/></td>
				<td><Link to={{ pathname:'/employee/'+this.props.employee.id, query: {employee: this.props.employee } }}>Details</Link></td>
			</tr>
		)
	}
}
