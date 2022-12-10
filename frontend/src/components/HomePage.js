import React from 'react'
import { Link, Navigate, useHistory } from "react-router-dom"

const Home = () => {
  const navigate = useHistory()

  const handleClick = () => {
    console.log('all tasks clicked')
    navigate.push('/tasks')
  }

  const handleClickEmployees = () => {
    console.log('all employees clicked')
    navigate.push('/employees')
  }

  return (
    <div>
      <h1>Employee Management System</h1>
      <button onClick={handleClick}>View All Tasks</button>
      <button onClick={handleClickEmployees}>View All Employees</button>
    </div>
  )
}
export default Home