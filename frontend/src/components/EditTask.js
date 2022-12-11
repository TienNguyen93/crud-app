import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { fetchTaskThunk, editTaskThunk } from "../store/thunks"

class EditTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      priority_level: "",
      completion_status: false,
      employeeId: null,
      redirect: false,
      redirectId: null
    }
  }

  componentDidMount() {
    // Getting task ID from url
    this.props.fetchTask(this.props.match.params.id)
    this.setState({
      description: this.props.task.description,
      priority_level: this.props.task.priority_level,
      completion_status: this.props.task.completion_status,
      employeeId: this.props.task.employeeId
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    // Get new info for task from form input
    alert("Apply Changes is clicked!")
    let task = {
      id: this.props.task.id,
      description: this.state.description,
      priority_level: this.state.priority_level,
      completion_status: this.state.completion_status,
      employeeId: this.task.employeeId
    }
    this.props.editTask(task)
    const respond = await this.props.editTask(task)
    this.setState({
      redirect: true,
      redirectId: this.props.task.id
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

      <div className="edit-wrapper">
        <h1>Edit Employee</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
          <div className="input-wrapper">
            <label className="edit-form-label">Description: </label>
            <input type="text" name="title" value={this.state.description} onChange={(e) => this.handleChange(e)} />
            </div>

            <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Priority Level: </label>
            <input type="text" name="priority_level" value={this.state.priority_level} onChange={(e) => this.handleChange(e)} />
            </div>

            <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Completion Status: </label>
            <input type="text" name="completion_status" value={this.state.completion_status} onChange={(e) => this.handleChange(e)} />
            </div>

            <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Employee ID: </label>
            <input type="text" name="employeeId" value={this.state.employeeId} onChange={(e) => this.handleChange(e)} />
            </div>

            <br />

          <div className="edit-button">
            <button type="submit">
              Apply Changes
            </button>
            <div className="buttons-wrap">
        <div>
        <Link to = {`/tasks`}>
          <button>
            Back to Tasks
            </button>
            </Link> 
        </div>
            </div>
            </div>
          </div>
        </form>
      </div>

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
}

export default connect(mapState, mapDispatch)(EditTask);