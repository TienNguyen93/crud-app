import React from "react";
import NavBar from "../NavBar";

const EmployeeNewTaskView = (props) => {
  const { employee, handleChange, handleSubmit } = props

  console.log('employeeeee', employee.first_name)
  return (
    <div>
      <NavBar />
      <div className="edit-wrapper">
        <h1>Add New Task</h1>
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
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Priority Level: </label>
              <input
                type="text"
                name="priority_level"
                required="required"
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
                minLength={5}
                maxLength={20}
                onChange={(e) => handleChange(e)} />
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

export default EmployeeNewTaskView