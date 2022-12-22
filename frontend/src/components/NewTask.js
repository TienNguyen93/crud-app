import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addTaskThunk } from '../store/thunks';
import EmployeeNewTask from './EmployeeNewTask';
import NewTaskView from './views/NewTaskView';

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      priority_level: "",
      completion_status: "",
      employeeId: null,
      redirect: false,
      redirectId: null,
    }
  }

  componentDidMount() {
    this.setState({
      description: this.props.description,
      priority_level: this.props.priority_level,
      completion_status: this.props.completion_status
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    let task = {
      description: this.state.description,
      priority_level: this.state.priority_level,
      completion_status: this.state.completion_status,
      employeeId: this.state.employeeId,
    }

    let newTask = await this.props.addTask(task)

    this.setState({
      description: this.state.description,
      priority_level: this.state.priority_level,
      completion_status: this.state.completion_status,
      employeeId: this.state.employeeId,
      redirect: true,
      redirectId: newTask.id
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/tasks/${this.state.redirectId}`} />)
    }
    return (
      <NewTaskView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatch = (dispatch) => {
  return ({
    addTask: (task) => dispatch(addTaskThunk(task))
  })
}

export default connect(null, mapDispatch)(NewTask)