import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk } from "../store/thunks"

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      priority_level: "",
      // completion_status: false,
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
      employeeId: this.props.task.employeeId
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    //get new info for task from form input
    let task = {
      id: this.props.task.id,
      description: this.state.description,
      priority_level: this.state.priority_level,
      employeeId: this.task.employeeId
    }

    this.props.editTask(task)

    this.setState({
      redirect: true,
      redirectId: this.props.task.id
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    //go to single task view of the edited task
    if (this.state.redirect) {
      return (<Redirect to={`/tasks/${this.state.redirectId}`} />)
    }

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.description}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          value={this.state.priority_level}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          value={this.state.employeeId}
          onChange={(e) => this.handleChange(e)}
        />

        <button type="submit">
          Submit
        </button>
      </form>
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

export default connect(mapState, mapDispatch)(Edit);