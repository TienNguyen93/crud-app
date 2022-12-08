import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const TasksView = ({ tasks }) => {
  const navigate = useNavigate()

  const clickEdit = () => {
    navigate('/edit')
  }

  return (
    <div>
      <h1>Manage Task</h1>
      <div className="all-tasks">
        <table>
          <tbody>
            <tr>
              <th>Tasks</th>
              <th>Description</th>
              <th>Priority Level</th>
              <th>Status</th>
            </tr>
            {tasks.map(task => {
              return (
                <tr key={task}>
                  <td>{task.id}</td>
                  <td>
                    <Link className="link" to={`/tasks/${task.id}`}>
                      {task.description}
                    </Link>
                  </td>
                  <td>{task.priority_level}</td>
                  {task.completion_status === null
                    ? <td>Incomplete</td>
                    : <td>Complete</td>}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="buttons-wrap">
        <div>
          <button>Delete</button>
        </div>
        <div className="edit">
          <button onClick={clickEdit}>
            Edit
          </button>
        </div>
      </div>

    </div>
  )
}

export default TasksView