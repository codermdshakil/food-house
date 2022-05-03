import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import NotFound from './Shared/NotFound/NotFound';
import SignIn from './Pages/SignIn/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Shared/Footer/Footer';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
AOS.init();


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
