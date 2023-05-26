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
import OperationInventory from './pages/operation2';
import Customer from './pages/customer';
import Details from './pages/customer details';

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
            <Route path='/operationinventory' element={<OperationInventory/>}/>
            <Route path='/customer' element={<Customer/>}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
