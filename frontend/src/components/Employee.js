import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployeeThunk, editTaskThunk } from "../store/thunks"
import EmployeeView from "./views/EmployeeView";

class Employee extends Component {
  componentDidMount() {
    // getting task ID from url
    this.props.fetchEmployee(this.props.match.params.id)
  }

  render() {
    return (
      <EmployeeView
        employee={this.props.employee}
        deleteEmployeeTask={this.props.deleteEmployeeTask}
        fetchEmployee={this.props.fetchEmployee}
        id={this.props.match.params.id} />
    )
  }
}

// Map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
  }
}

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    deleteEmployeeTask: (taskId) => dispatch(editTaskThunk(taskId)),
  }
}

export default connect(mapState, mapDispatch)(Employee)