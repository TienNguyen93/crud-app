import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"

const Task = () => {
  const navigate = useNavigate()

  const clickEdit = () => {
    navigate('/edit')
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
              <td>Create CRUD app</td>
              <td>Urgent</td>
              <td>Incomplete</td>
              <td>Jane</td>
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

export default Task