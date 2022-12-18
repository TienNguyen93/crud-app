import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";


const TasksView = ({ tasks, deleteTask }) => {
  const navigate = useHistory()

  if (!tasks.length) {
    return (
      <div>
        <h2>There are no tasks.</h2>
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
            <h4>Click on Task description to edit!</h4>
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
                      <button
                        onClick={() => deleteTask(task.id)}
                        style={{ backgroundColor: 'red', width: '5rem' }}>
                        X
                      </button>
                      
                      <Link className="link" to={`/tasks/${task.id}`}>
                      <button
                        style={{ backgroundColor: 'royalblue', width: '5rem' }}>
                        Edit
                      </button>
                      </Link>
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
      </div>
    </div>
  )
}

export default TasksView