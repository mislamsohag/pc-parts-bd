
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Componants/Navbar';
import Reviews from './Pages/Reviews';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login';
import MyReview from './Pages/MyReview';

function App() {
  return (
    <>
      <Navbar>
        <div className='max-w-7xl mx-auto px-12'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/reviews' element={<Reviews></Reviews>}>

            </Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
        </div>
      </Navbar>
    </>
  );
}

export default App;
