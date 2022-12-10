import { Link } from "react-router-dom";

const AllEmployeesView = ({ employees }) => {

  if (!employees.length) {
    return (
    <div>
      <h2>There are no employees.</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Manage Employee</h1>
      <div className="all-employees">
        <h4>Click on Employee First Name to edit</h4>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Delete Employee</th>
            </tr>
            {employees.map(employee => {
              return (
                <tr key={employee}>
                  <td>{employee.id}</td>
                  <td>
                    <Link className="link" to={`/employees/${employee.id}`}>
                      {employee.first_name}
                    </Link>
                  </td>
                  <td>{employee.last_name}</td>
                  <td>{employee.department}</td>
                  <td><button>X</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllEmployeesView