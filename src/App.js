import './App.css';
import Navbar from './componants/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componants/Footer';
import Signup from './componants/Signup';
import PrivateComponant from './componants/PrivateComponant';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponant />}>
            <Route path='/' element={<h1>Product Listing Componant</h1>} />
            <Route path='/add' element={<h1>Add Product Componant</h1>} />
            <Route path='/update' element={<h1>Update Product Componant</h1>} />
            <Route path='/logout' element={<h1>Logout Componant</h1>} />
            <Route path='/profile' element={<h1>Profile Componant</h1>} />
          </Route>
            <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
