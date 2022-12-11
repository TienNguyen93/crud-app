import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { addEmployeeThunk } from '../store/thunks';

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
    if ( this.state.title === ""){
      this.setState({error: "field is required"});
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
      redirect: true,
      redirectId: this.props.newEmployee.id,
      error: ""
    })
    console.log(this.handleSubmit)
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    //go to single task view of the edited task
    if (this.state.redirect) {
      return (<Redirect to={`/employees`} />)
    }

    return (
      <div className="edit-wrapper">
        <h1>Add New Employee</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
          <div className="input-wrapper">
            <label className="edit-form-label">First Name: </label>
            <input type="text" name="title" value={this.state.first_name} onChange={(e) => this.handleChange(e)} />
            </div>

            <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Last Name: </label>
            <input type="text" name="priority_level" value={this.state.last_name} onChange={(e) => this.handleChange(e)} />
            </div>

            <br />


          <div className="input-wrapper">
            <label className="edit-form-label">Department: </label>
            <input type="text" name="employeeId" value={this.state.department} onChange={(e) => this.handleChange(e)} />
            </div>

            <br />

          <div className="edit-button">
            <button type="submit">
              Add 
            </button>
            <div className="buttons-wrap">
        <div>
        <Link to = {`/employees`}>
          <button>
            Back to Employees
            </button>
            </Link> 
        </div>
            </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return ({
  addEmployee: (employee) => dispatch(addEmployeeThunk(employee))
  })
}

export default connect(null, mapDispatch)(NewEmployee);