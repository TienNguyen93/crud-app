import './App.css';
import {Routes, Route} from 'react-router-dom' 

import Home from './components/HomePage';
import Task from './components/Task'
import Edit from './components/Edit';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/tasks/:id" element={<Task />}/>
          <Route exact path="/tasks" element={<Tasks />}/>
          <Route exact path="/edit" element={<Edit />}/>
        </Routes>
    </div>
  );
}

export default App;
