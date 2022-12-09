import React from "react";
import { useHistory } from "react-router-dom";

const TaskView = ({ task }) => {
  const navigate = useHistory()

  const clickEdit = () => {
    navigate.push(`/edittask/${task.id}`)
  }

  const clickDelete = () => {
    alert("Delete clicked!")
  }

  return (
    <div>
      <h1>Single task view</h1>
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
              {task.completion_status === null
                ? <td>Incomplete</td>
                : <td>Complete</td>
              }
              <td>{task.employee.first_name + " " + task.employee.last_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons-wrap">
        <div>
          <button onClick={clickDelete}>Delete</button>
        </div>
        <div className="edit">
          <button onClick={clickEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskView