import React from 'react'
import { useHistory } from "react-router-dom"

const Home = () => {
  const navigate = useHistory()

  const handleClickTasks = () => {
    console.log('all tasks clicked')
    navigate.push('/tasks')
  }

  const handleClickEmployees = () => {
    console.log('all employees clicked')
    navigate.push('/employees')
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Employee Management System</h1>
      <button onClick={handleClickTasks}>View All Tasks</button>
      <button onClick={handleClickEmployees}>View All Employees</button>
    </div>
  )
}
export default Home