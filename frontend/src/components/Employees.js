import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllEmployeesThunk, deleteEmployeeThunk } from "../store/thunks"
import AllEmployeesView from "./views/AllEmployeesView";

class Employees extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllEmployees();
  }

  render() {
    return (
      <div>
        <AllEmployeesView
          employees={this.props.allEmployees}
          deleteEmployee={this.props.deleteEmployee} />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),
  };
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(Employees);