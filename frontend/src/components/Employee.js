import { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployeeThunk, fetchAllTasksThunk, deleteTaskThunk } from "../store/thunks"
import EmployeeView from "./views/EmployeeView";

class Employee extends Component {
  componentDidMount() {
    // getting task ID from url
    this.props.fetchEmployee(this.props.match.params.id)
  }

  render() {
    console.log('employee in container', this.props.employee)
    return (
      <div>
      <EmployeeView employee = {this.props.employee}
        tasks = {this.props.allTasks}
        deleteTask = {this.props.deleteTask} />
        </div>
    )
  }
}

// map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks
  }
}

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
  }
}

export default connect(mapState, mapDispatch)(Employee)
