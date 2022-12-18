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
      <h1 style={{textAlign: 'center'}}>Single task view</h1>
      <div className="single-task">
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
              { // Displays “Unassigned” if the task is not assigned to an employee
              task.employee.first_name !== null && task.employee.last_name !== null 
                ?<td>{task.employee.first_name + " " + task.employee.last_name}</td> 
                :<td>Unassigned</td>
              }
            </tr>
          </tbody>
        </table>
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