import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"

const Tasks = () => {
  const navigate = useNavigate()

  const clickEdit = () => {
    navigate('/edit')
  }

  return (
    <div>
      <h1>Manage Task</h1>
      <div className="all-tasks">
        <table>
          <tbody>
            <tr>
              <th>Tasks</th>
              <th>Description</th>
              <th>Priority Level</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>Approve Payroll</td>
              <td>High</td>
              <td>Incomplete</td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>Supply Order</td>
              <td>Medium</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>Update Monthly Incentives</td>
              <td>Low</td>
              <td>Incomplete</td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>Join the Meeting with CEO</td>
              <td>High</td>
              <td>Complete</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons-wrap">
        <div>
          <button>Delete</button>
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

export default Tasks