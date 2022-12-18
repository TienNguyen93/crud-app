import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All employees
export const fetchAllEmployees = (employees) => {
  return {
    type: at.FETCH_ALL_EMPLOYEES,
    payload: employees
  }
}
// Add Employee
export const addEmployee = (employee) => {
  return {
    type: at.ADD_EMPLOYEE,
    payload: employee,
  };
};
// Delete Employee
export const deleteEmployee = (employeeId) => {
  return {
    type: at.DELETE_EMPLOYEE,
    payload: employeeId,
  };
};

// Single employee
export const fetchEmployee = (employee) => {
  return {
    type: at.FETCH_EMPLOYEE,
    payload: employee
  }
}

// All tasks
export const fetchAllTasks = (tasks) => {
  return {
    type: at.FETCH_ALL_TASKS,
    payload: tasks
  }
}

// Single task
export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task
  }
}

// Edit task
export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task
  }
}
// Delete Task
export const deleteTask = (taskId) => {
  return {
    type: at.DELETE_TASK,
    payload: taskId
  };
};