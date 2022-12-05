import React from "react"
import { useState } from "react"

const Edit = () => {
  const [description, setDescription] = useState("")
  const [level, setLevel] = useState("")
  const [status, setStatus] = useState("")
  const [assigned, setAssigned] = useState("")

  const levels = ["High", "Normal", "Low"]
  const statuses = ["Complete", "Incomplete"]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle submit click')
    alert("Apply Changes is clicked!")
  }

  console.log('level here', level)

  return (
    <div className="edit-wrapper">
      <h1>Edit page here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-wrapper">
            <label className="edit-form-label">Description: </label>
            <input
              className="edit-field"
              type="text"
              placeholder="Description"
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>

          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Priority Level:</label>
            <select 
              required 
              className="edit-select" 
              onChange={e => setLevel(e.target.value)}
            >
              {levels.map(level => <option key={level}>{level}</option>)}
            </select>
          </div>

          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Status:</label>
            <select 
              required 
              className="edit-select" 
              onChange={e => setStatus(e.target.value)}
            >
              {statuses.map(status => <option key={status}>{status}</option>)}
            </select>
          </div>

          <br />

          <div className="input-wrapper">
            <label className="edit-form-label">Assigned:</label>
            <input
              className="edit-field"
              type="text"
              placeholder="Assigned"
              onChange={e => setAssigned(e.target.value)}
              required
            />
          </div>

          <div className="edit-button">
            <button>Apply changes</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Edit