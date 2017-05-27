import React, { Component } from 'react'

export default class EmployeeDetail extends Component {
  render(){
    if(this.props.match !== undefined && this.props.match.params !== undefined ){
      return(
        <div>
          <table style={{border: '1px solid black'}}>
            <tbody><tr>
              <td>Id</td>
              <td>Name</td>
              <td>Department</td>
            </tr>
            <tr>
              <td>{this.props.match.params.id}</td>
              <td>{this.props.location.query.employee.name}</td>
              <td>{this.props.location.query.employee.department}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return (null);
}
}
