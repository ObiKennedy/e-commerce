import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './components/navbar';
import DashBoard from './pages/dashboard';
import Analytics from './pages/analytics';
import ALink from './pages/analytics01';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/Alink' element={<ALink/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
