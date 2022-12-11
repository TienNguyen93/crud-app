import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const TaskView = ({ task }) => {
  const navigate = useHistory()

  const clickEdit = () => {
    navigate.push(`/edittask/${task.id}`)
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
              <td>{task.completion_status}</td>
              <td>{task.employee.first_name + " " + task.employee.last_name}</td>
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