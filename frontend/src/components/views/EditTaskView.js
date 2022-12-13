import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";

const EditTaskView = (props) => {

  const { task, handleChange, handleSubmit } = props

  return (
    <div className="edit-wrapper">
      <h1>Edit Task</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className="input-wrapper">
            <label className="edit-form-label">Description: </label>
            <input 
              type="text" 
              name="description" 
              required
              value={task.description} 
              onChange={(e) => handleChange(e)} />
          </div>
          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Priority Level: </label>
            <input 
              type="text" 
              name="priority_level"
              required 
              value={task.priority_level} 
              onChange={(e) => handleChange(e)} />
          </div>
          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Completion Status: </label>
            <input 
              type="text" 
              name="completion_status" 
              required
              value={task.completion_status} 
              onChange={(e) => handleChange(e)} />
          </div>
          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Employee ID: </label>
            <input 
              type="text" 
              name="employeeId" 
              required
              value={task.employeeId} 
              onChange={(e) => handleChange(e)} />
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

export default EditTaskView