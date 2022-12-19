import React from "react"
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

const EditEmployeeView = (props) => {

    const { employee, error, handleChange, handleSubmit } = props

    return (
        <div>
            <NavBar />
            <div className="edit-wrapper">
                <h1>Edit Employee</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <div className="input-wrapper">
                            <label className="edit-form-label">First Name: </label>
                            <input
                                type="text"
                                name="first_name"
                                required
                                minLength={5}
                                maxLength={30}
                                value={employee.first_name}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <br />

                        <div className="input-wrapper">
                            <label className="edit-form-label">Last Name: </label>
                            <input
                                type="text"
                                name="last_name"
                                required="required"
                                value={employee.last_name}
                                minLength={3}
                                maxLength={20}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <br />

                        <div className="input-wrapper">
                            <label className="edit-form-label">Department: </label>
                            <input
                                type="text"
                                name="department"
                                required
                                value={employee.department}
                                minLength={5}
                                maxLength={20}
                                onChange={(e) => handleChange(e)} />
                        </div>
                        <br />
                        <br />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <button type="submit">
                                Apply Changes
                            </button>
                        </div>

                    </div>
                </form>
                {error !== "" && <p>{error}</p>}
            </div>
        </div>

    );
}

export default EditEmployeeView