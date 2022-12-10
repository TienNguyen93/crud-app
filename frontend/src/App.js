import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './components/HomePage';
import Tasks from './components/Tasks';
import Employees from './components/Employees';
import Task from './components/Task';
import Edit from './components/Edit';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tasks/:id" component={Task} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/edittask/:id" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
