import { Component } from "react";
import { connect } from 'react-redux'
import { fetchAllTasksThunk, deleteTaskThunk } from '../store/thunks'
import TasksView from "./views/TasksView";

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchAllTasks()
  }

  render() {
    return (
      <div>
        <TasksView tasks={this.props.allTasks}
        deleteTask = {this.props.deleteTask}/>
      </div>
    )
  }
}

// Map state to props;
const mapState = state => {
  return {
    allTasks: state.allTasks
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
    deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
  }
}

export default connect(mapState, mapDispatch)(Tasks)











// import React from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom"
// import {fetchAllTasksThunk} from "../store/thunks"
// import {useState, useEffect} from "react"

// const Tasks = () => {
//   const [tasks, setTasks] = useState([])

//   useEffect(() => {
//     fetchAllTasksThunk()
//     .then(res => {
//       console.log('res', res)
//     })
//   }, [])

//   const navigate = useNavigate()

//   const clickEdit = () => {
//     navigate('/edit')
//   }

//   return (
//     <div>
//       <h1>Manage Task</h1>
//       <div className="all-tasks">
//         <table>
//           <tbody>
//             <tr>
//               <th>Tasks</th>
//               <th>Description</th>
//               <th>Priority Level</th>
//               <th>Status</th>
//             </tr>
//             <tr>
//               <td>Task 1</td>
//               <td>Approve Payroll</td>
//               <td>High</td>
//               <td>Incomplete</td>
//             </tr>
//             <tr>
//               <td>Task 2</td>
//               <td>Supply Order</td>
//               <td>Medium</td>
//               <td>Complete</td>
//             </tr>
//             <tr>
//               <td>Task 3</td>
//               <td>Update Monthly Incentives</td>
//               <td>Low</td>
//               <td>Incomplete</td>
//             </tr>
//             <tr>
//               <td>Task 4</td>
//               <td>Join the Meeting with CEO</td>
//               <td>High</td>
//               <td>Complete</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="buttons-wrap">
//         <div>
//           <button>Delete</button>
//         </div>
//         <div className="edit">
//           <button onClick={clickEdit}>
//             Edit
//           </button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Tasks