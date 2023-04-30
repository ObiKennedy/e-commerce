import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './components/navbar';
import DashBoard from './pages/dashboard';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>

          
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
