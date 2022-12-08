import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Home from './components/HomePage';
import Task from './components/Task'
import Edit from './components/Edit';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/task" element={<Task />}/>
          <Route exact path="/tasks" element={<Tasks />}/>
          <Route exact path="/edit" element={<Edit />}/>
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
