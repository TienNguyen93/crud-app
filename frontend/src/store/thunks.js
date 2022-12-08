import * as ac from './actions/actionCreators';
import axios from 'axios';
// const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5001/api";

// THUNKS

// All employees
export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`)
    dispatch(ac.fetchAllEmployees(res.data))
  } catch(error) {
    console.log(error)
  }
}

// Single employee
export const fetchEmployeeThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees/${id}`)
    dispatch(ac.fetchEmployee(res.data))
  } catch(error) {
    console.log(error)
  }
}

// All tasks
export const fetchAllTasksThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks`)
    dispatch(ac.fetchAllTasks(res.data))
  } catch(error) {
    console.log(error)
  }
}

// Single task
export const fetchTaskThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks/${id}`)
    dispatch(ac.fetchTask(res.data))
  } catch(error) {
    console.log(error)
  }
}

// Edit task
export const editTaskThunk = (task) => async (dispatch) => {
  try {
    let res = await axios.put(`${path}/tasks/${task.id}`, task)
    dispatch(ac.editTask(res.data))
  } catch (error) {
    console.log(error)
  }
}


