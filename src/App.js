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
import Operations from './pages/operation2';
import Customer from './pages/customer';
import Details from './pages/customer details';
import Header from './components/header';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <div>
             <Header name={'Dashboard'} user={'Abu'} position={'Sales Manager'} />
             <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/Analytics' element={<Analytics/>}/>
            <Route path='/Links' element={<ALink/>}/>
            <Route path='/Orders' element={<Orders/>}/>
            <Route path='/Product' element={<Product/>}/>
            <Route path='/Categories' element={<Categories/>}/>
            <Route path='/Products' element={<AddProduct/>}/>
            <Route path='/operation' element={<Operation/>}/>
            <Route path='/Operations' element={<Operations/>}/>
            <Route path='/Customers' element={<Customer/>}/>
            <Route path='/Details' element={<Details/>}/>
          </Routes>
          </div>
          
        </Router>
    </div>
  );
}

export default App;
