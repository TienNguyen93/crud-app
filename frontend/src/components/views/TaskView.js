import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const TaskView = ({ task }) => {
  const navigate = useHistory()

  const clickEdit = () => {
    navigate.push(`/edittask/${task.id}`)
  }

  return (
    <div>
      <NavBar />
      <div className="single-task">
        <div className="header">
          <h1 style={{ textAlign: 'center' }}>Single task view</h1>
          <div className="notice">
            <h4>Click on Assigned Employee Name for more information?</h4>
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Description</th>
                <th>Priority Level</th>
                <th>Status</th>
                <th>Assigned</th>
              </tr>
              <tr>
                <td>{task.description}</td>
                <td>{task.priority_level}</td>
                <td>{task.completion_status}</td>
                {task.employeeId !== null
                  ? <td>
                    <Link className="link" to={`/employees/${task.employee.id}`}>
                      {task.employee.first_name + " " + task.employee.last_name}</Link>
                  </td>
                  : <td>Unassigned</td>
                }
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div className="buttons-wrap">
        <div className="edit">
          <Link to={`/tasks`}>
            <button>
              Back to All Tasks
            </button>
          </Link>
          <button onClick={clickEdit}>
            Edit Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskView