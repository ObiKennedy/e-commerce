import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './components/navbar';
import DashBoard from './pages/dashboard';
import Analytics from './pages/analytics';
import ALink from './pages/analytics01';
import Orders from './pages/orders';
import Product from './pages/products';
import Categories from './pages/product/categories';
import AddProduct from './pages/prodct/add';
import Operation from './pages/operations';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/Alink' element={<ALink/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/operation' element={<Operation/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
