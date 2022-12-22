import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { addEmployeeThunk } from '../store/thunks';
import NewEmployeeView from './views/NewEmployeeView';

class NewEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      department: "",
      employeeId: null,
      redirect: false,
      redirectId: null,
      error: ""
    }
  }

  componentDidMount() {
    this.setState({
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      department: this.props.department
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    if (this.state.title === "") {
      this.setState({ error: "field is required" });
      return
    }
    let employee = {
      employeeId: this.state.employeeId,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      department: this.state.department
    }

    let newEmployee = await this.props.addEmployee(employee)

    this.setState({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      department: this.state.department,
      employeeId: this.state.employeeId,
      redirect: true,
      redirectId: newEmployee.id,
      error: ""
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {

    if (this.state.redirect) {
      return (<Redirect to={`/employees`} />)
    }

    return (
      <NewEmployeeView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    )
  }
}

const mapDispatch = (dispatch) => {
  return ({
    addEmployee: (employee) => dispatch(addEmployeeThunk(employee))
  })
}

export default connect(null, mapDispatch)(NewEmployee);