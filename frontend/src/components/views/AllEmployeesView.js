import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import {RiDeleteBin2Line, RiEdit2Line} from 'react-icons/ri'

const AllEmployeesView = ({ employees, deleteEmployee }) => {

  if (!employees.length) {

    return (
      <div>
        <h2>There are no employees.</h2>
        <div className="edit">
          <Link to={`/newemployee`}>
            <button>
              Add
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
            <h4>Click on Employee First Name to edit?</h4>
          </div>
        </div>
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
                    <button 
                      style={{ backgroundColor: 'red', width: '3rem', padding: '3px', borderRadius: '5px' }}
                      onClick={() => deleteEmployee(employee.id)}>
                      <RiDeleteBin2Line size={20}/>
                    </button>

                    <Link className="link" to={`/employees/${employee.id}`}>
                      <button
                        style={{ backgroundColor: 'royalblue', width: '3rem', padding: '3px', borderRadius: '5px' }}>
                        <RiEdit2Line size={20}/>
                      </button>
                      </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="buttons-wrap">
        <div>
          <Link to={``}>
            <button>
              Back to main page
            </button>
          </Link>
        </div>
        <div className="edit">
          <Link to={`/newemployee`}>
            <button>
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AllEmployeesView