import React from "react"
import { useState } from "react"

const EditTaskView = (props) => {

  const { task, handleChange, handleSubmit } = props

  return (
    <div className="edit-wrapper">
      <h1>Edit Task</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className="input-wrapper">
            <label className="edit-form-label">Description: </label>
            <input type="text" name="description" value={task.description} onChange={(e) => handleChange(e)} />
          </div>
          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Priority Level: </label>
            <input type="text" name="priority_level" value={task.priority_level} onChange={(e) => handleChange(e)} />
          </div>
          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Completion Status: </label>
            <input type="text" name="completion_status" value={task.completion_status} onChange={(e) => handleChange(e)} />
          </div>
          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Employee ID: </label>
            <input type="text" name="employeeId" value={task.employeeId} onChange={(e) => handleChange(e)} />
          </div>
          <br />

          <div className="edit-button">
            <Link to={`/tasks`}>
              <button>
                Back to All Tasks
              </button>
            </Link>
            <button type="submit">
              Apply Changes
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default EditView