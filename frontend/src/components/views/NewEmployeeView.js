import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";
import NewEmployee from "../NewEmployee";

const NewEmployeeView = (props) => {

  const { error, handleChange, handleSubmit } = props

  return (     
    <div className="edit-wrapper">
    <h1>Add New Employee</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
      <div className="input-wrapper">
        <label className="edit-form-label">First Name: </label>
        <input type="text" name="first_name" onChange={(e) => handleChange(e)} />
        </div>

        <br />

      <div className="input-wrapper">
        <label className="edit-form-label">Last Name: </label>
        <input type="text" name="last_name"  onChange={(e) => handleChange(e)} />
        </div>

        <br />


      <div className="input-wrapper">
        <label className="edit-form-label">Department: </label>
        <input type="text" name="department" onChange={(e) => handleChange(e)} />
        </div>

        <br />

      <div className="edit-button">
        <button type="submit">
          Add 
        </button>
        <div className="buttons-wrap">
    <div>
    <Link to = {`/employees`}>
      <button>
        Back to Employees
        </button>
        </Link> 
    </div>
        </div>
        </div>
      </div>
    </form>
  </div>
)
}

export default NewEmployeeView