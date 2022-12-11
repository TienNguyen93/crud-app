import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchTaskThunk, editTaskThunk } from "../store/thunks"
import EditTaskView from "./views/EditTaskView";

class EditTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.task.id,
      description: this.props.task.description,
      priority_level: this.props.task.priority_level,
      completion_status: this.props.task.completion_status,
      employeeId: this.props.task.employeeId,
      redirect: false,
      redirectId: null
    }
  }

  componentDidMount() {
    // Getting task ID from url
    this.props.fetchTask(this.props.match.params.id)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    // Get new info for task from form input
    let task = {
      id: this.state.id,
      description: this.state.description,
      priority_level: this.state.priority_level,
      completion_status: this.state.completion_status,
      employeeId: this.state.employeeId
    }

    let editedTask = await this.props.editTask(task)

    this.setState({
      description: this.state.description,
      priority_level: this.state.priority_level,
      completion_status: this.state.completion_status,
      employeeId: null,
      redirect: true,
      redirectId: task.id
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    // Go to single task view of the edited task
    if (this.state.redirect) {
      return (<Redirect to={`/tasks/${this.state.redirectId}`} />)
    }

    return (

      <EditTaskView
                handleChange = {this.handleChange} 
                handleSubmit={this.handleSubmit} 
                task={this.state}
            />

      // <form onSubmit={(e) => this.handleSubmit(e)}>
      //   <input
      //     type="text"
      //     value={this.state.description}
      //     onChange={(e) => this.handleChange(e)}
      //   />
      //   <input
      //     type="text"
      //     value={this.state.priority_level}
      //     onChange={(e) => this.handleChange(e)}
      //   />
      //   <input
      //     type="text"
      //     value={this.state.employeeId}
      //     onChange={(e) => this.handleChange(e)}
      //   />

      //   <button type="submit">
      //     Submit
      //   </button>
      // </form>

    )
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatch = (dispatch) => {
  return ({
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  })
};

export default connect(mapState, mapDispatch)(EditTask);