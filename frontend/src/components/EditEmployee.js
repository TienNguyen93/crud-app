import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchEmployeeThunk, editEmployeeThunk } from "../store/thunks"
import EditEmployeeView from "./views/EditEmployeeView";

class EditEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.employee.id,
      first_name: this.props.employee.first_name,
      last_name: this.props.employee.last_name,
      department: this.props.employee.department,
      taskId: this.props.employee.taskId,
      redirect: false,
      redirectId: null,
      error: ""
    }
  }

  componentDidMount() {
    // Getting employee ID from url
    this.props.fetchEmployee(this.props.match.params.id)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    // Get new info for employee from form input
    if (this.state.first_name === "") {
      this.setState({ error: "First name field is required" });
      return;
    }

    let employee = {
      id: this.state.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      department: this.state.department,
      employeeId: this.state.employeeId
    }

    let editedEmployee = await this.props.editEmployee(employee)

    this.setState({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      department: this.state.department,
      employeeId: null,
      redirect: true,
      redirectId: employee.id,
      error: ""
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    // Go to single employee view of the edited employee
    if (this.state.redirect) {
      return (<Redirect to={`/employees/${this.state.redirectId}`} />)
    }

    return (
      <EditEmployeeView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
        employee={this.state}
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
    editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
  })
};

export default connect(mapState, mapDispatch)(EditEmployee);