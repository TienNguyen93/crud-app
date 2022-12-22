import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { RiDeleteBin2Line } from 'react-icons/ri'

const EmployeeView = (props) => {

  const { id, fetchEmployee, employee, deleteEmployeeTask } = props
  const navigate = useHistory()

  if (!employee.tasks.length) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '6rem',
        flexDirection: 'column'
      }}>
        <h2>Employee has no tasks</h2>
        <Link to={`/newtask`}>
          <button>
            Add Task
          </button>
        </Link>
      </div>
    )
  }

  const clickEdit = () => {
    navigate.push(`/editemployee/${employee.id}`)
  }

  const clickDelete = async (task) => {
    task.employeeId = null
    await deleteEmployeeTask(task)
    await fetchEmployee(id)
  }

  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Single employee view</h1>
      <div className="single-task">
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
            </tr>

            <tr>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.department}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 style={{ textAlign: 'center' }}>Tasks</h1>
      <div className="single-task">
        <table>
          <tbody>
            <tr>
              <th>Task Description</th>
              <th>Priority Level</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

            {employee.tasks.map(task => {
              return (
                <tr key={task.id}>

                  <td>
                    <Link className="link" to={`/tasks/${task.id}`}>
                      {task.description}
                    </Link>
                  </td>
                  <td>{task.priority_level}</td>
                  <td>{task.completion_status}</td>
                  <td>
                    <button className="delete-button"
                      onClick={() => clickDelete(task)}>
                      <RiDeleteBin2Line size={20} />
                    </button>
                  </td>

                </tr>
              )
            })}

          </tbody>
        </table>
      </div>

      <div className="buttons-wrap">
        <button onClick={clickEdit}>
          Edit Employee
        </button>
        <Link to={`/employees/${id}/newtask`}>
          <button>
            Add New Task
          </button>
        </Link>
      </div>

    </div>
  )
}

export default EmployeeView