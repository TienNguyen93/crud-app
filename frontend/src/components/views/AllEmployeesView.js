import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'

const AllEmployeesView = ({ employees, deleteEmployee }) => {

  if (!employees.length) {

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '6rem',
        flexDirection: 'column'
      }}>
        <h2>There are no employees.</h2>
        <div className="edit">
          <Link to={`/newemployee`}>
            <button>
              Add Employee
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="all-employees">
        <div className="header">
          <h1>Manage Employees</h1>
          <div className="notice">
            <h4>Click on employee first name to edit.</h4>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
            {employees.map(employee => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>
                    <Link className="link" to={`/employees/${employee.id}`}>
                      {employee.first_name}
                    </Link>
                  </td>
                  <td>{employee.last_name}</td>
                  <td>{employee.department}</td>
                  <td>
                    <div className="action-button-wrap">
                      <button
                        onClick={() => deleteEmployee(employee.id)}
                        className="delete-button"
                      >
                        <RiDeleteBin2Line size={20} />
                      </button>

                      <Link className="link" to={`/employees/${employee.id}`}>
                        <button
                          style={{
                            backgroundColor: '#0818A8',
                            width: '3rem',
                            padding: '3px',
                            borderRadius: '5px'
                          }}
                        >
                          <RiEdit2Line size={20} />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="buttons-wrap">
        <div className="edit">
          <Link to={`/newemployee`}>
            <button>
              Add New Employee
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AllEmployeesView