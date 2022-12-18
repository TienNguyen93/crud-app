import React from "react";
import NavBar from "../NavBar";

const NewTaskView = (props) => {
  const { handleChange, handleSubmit } = props

  return (
    <div>
      <NavBar />
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
                minLength={5}
                maxLength={30}
                // value={task.description}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Priority Level: </label>
              <input
                type="text"
                name="priority_level"
                required="required"
                // value={task.priority_level}
                minLength={3}
                maxLength={20}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Completion Status: </label>
              <input
                type="text"
                name="completion_status"
                required
                // value={task.completion_status}
                minLength={5}
                maxLength={20}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Employee ID: </label>
              <input
                type="text"
                name="employeeId"
                required
                // value={task.employeeId}
                onChange={(e) => handleChange(e)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            <br />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button type="submit">
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default NewTaskView