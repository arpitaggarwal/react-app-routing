import React, { Component, PropTypes } from 'react'

export default class DeleteEmployee extends React.Component {
  render(){
    return (
          <button onClick = {(employeeName) => this.handleDelete(employeeName)}>
             Delete
          </button>
    )

}
  handleDelete(employeeName) {
   this.props.deleteEmployee(employeeName);
  }
}
