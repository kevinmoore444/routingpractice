import './App.css';
import { Routes, Route } from "react-router-dom"
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<h1>Welcome</h1>}/>
        <Route path='/:data' element={<Number/>}/>
        <Route path='/:data/:color/:backgroundColor' element={<Number/>}/>
      </Routes>
    </div>
  );
}

export default App;
