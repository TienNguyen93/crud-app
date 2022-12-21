import { Component } from "react";
import { connect } from 'react-redux'
import { fetchAllTasksThunk, deleteTaskThunk } from '../store/thunks'
import TasksView from "./views/TasksView";

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchAllTasks()
  }

  render() {
    return (
      <div>
        <TasksView tasks={this.props.allTasks}
        deleteTask = {this.props.deleteTask}/>
      </div>
    )
  }
}

// Map state to props;
const mapState = state => {
  return {
    allTasks: state.allTasks
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
  }
}

export default connect(mapState, mapDispatch)(Tasks)