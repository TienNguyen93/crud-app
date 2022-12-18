import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const EmployeeView = ({ employee }) => {
  const navigate = useHistory()

  const clickEdit = () => {
    navigate.push(`/editemployee/${employee.id}`)
  }

  return (
    <div>
      <NavBar />
      <h1 style={{textAlign: 'center'}}>Single employee view</h1>
      <div className="single-task">
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
            </tr>

            <tr>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.department}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="buttons-wrap">
          <button onClick={clickEdit}>
            Edit Employee
          </button>
        </div>
      </div>
  )
}

export default EmployeeView