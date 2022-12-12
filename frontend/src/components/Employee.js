import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployeeThunk } from "../store/thunks"
import EmployeeView from "./views/TaskView";

class Employee extends Component {
  componentDidMount() {
    // getting task ID from url
    this.props.fetchEmployee(this.props.match.params.id)
  }

  render() {
    console.log('employee in container', this.props.employee)
    return (
      <EmployeeView employee={this.props.employee}/>
    )
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: employee.task
  }
}

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id))
  }
}

export default connect(mapState, mapDispatch)(Employee)
