import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'


const TasksView = ({ tasks, deleteTask }) => {
  const navigate = useHistory()

  if (!tasks.length) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '6rem',
        flexDirection: 'column'
      }}>
        <h2>There are no tasks.</h2>
        <Link to={`/newtask`}>
          <button>
            Add Task
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="all-tasks">
        <div className="header">
          <h1>Manage Tasks</h1>
          <div className="notice">
            <h4>Click on Task description to edit?</h4>
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Tasks</th>
                <th>Description</th>
                <th>Priority Level</th>
                <th>Status</th>
                <th>Delete Task</th>
              </tr>
              {tasks.map(task => {
                return (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>
                      <Link className="link" to={`/tasks/${task.id}`}>
                        {task.description}
                      </Link>
                    </td>
                    <td>{task.priority_level}</td>
                    <td>{task.completion_status}</td>
                    <td>
                      <div className="action-button-wrap">
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="delete-button"
                        >
                          <RiDeleteBin2Line size={20} />
                        </button>

                        <Link className="link" to={`/tasks/${task.id}`}>
                          <button
                            style={{ 
                              backgroundColor: '#0818A8', 
                              width: '3rem', 
                              padding: '3px', 
                              borderRadius: '5px'}}
                            >
                            <RiEdit2Line size={20} />
                          </button>
                        </Link>
                      </div>

                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="buttons-wrap">
        <Link to={``}>
          <button>
            Back to main page
          </button>
        </Link>
        <Link to={`/newtask`}>
          <button>
            Add New Task
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TasksView