import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('all tasks clicked')
    navigate('/tasks')

  }
  return (
    <div>
      <h1>Employee Management System</h1>
      <button onClick={handleClick}>View all tasks</button>
      <button>View all employees</button>
    </div>
  )
}
export default Home