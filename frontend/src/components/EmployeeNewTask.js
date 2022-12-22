import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchEmployeeThunk, addTaskThunk } from "../store/thunks"
import EmployeeNewTaskView from './views/EmployeeNewTaskView';

class EmployeeNewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // id: this.props.employee.id,
      description: "",
      priority_level: "",
      completion_status: "",
      employeeId: this.props.employee.id,
      redirect: false,
      redirectId: null,
    }
  }

  componentDidMount() {
    // Getting employee ID from url
    this.props.fetchEmployee(this.props.match.params.id)
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

    let newTask = {
      // id: this.state.id,
      description: this.state.description,
      priority_level: this.state.priority_level,
      completion_status: this.state.completion_status,
      employeeId: this.props.employee.id,
    }

    let employeeTask = await this.props.addTask(newTask)

    this.setState({
      description: this.state.description,
      priority_level: this.state.priority_level,
      completion_status: this.state.completion_status,
      employeeId: this.props.employee.id,
      redirect: true,
      redirectId: employeeTask.id,
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    // Go to single employee view of the edited employee
    if (this.state.redirect) {
      return (<Redirect to={`/tasks/${this.state.redirectId}`} />)
    }

    return (

      <EmployeeNewTaskView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        employee={this.props.employee}
      />
    )
  }
}

// Map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
  };
};

const mapDispatch = (dispatch) => {
  return ({
    addTask: (task) => dispatch(addTaskThunk(task)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
  })
};

export default connect(mapState, mapDispatch)(EmployeeNewTask);