const React = require('react');
import Employee from './employee.jsx'

export default class EmployeeList extends React.Component{
    
    render() {
		var employees = this.props.employees.map((employee, i) =>
			<Employee key={i} employee={employee} deleteEmployee={() => this.props.deleteEmployee(employee.name)}/>
		);
		
		return (
			<table>
				<tbody>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Department</th>
						<th>Delete</th>
						<th>Details</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}