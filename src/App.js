import './App.css';
import Nav from './Main_Components/Nav.js';
import Footer from './/Main_Components/Footer.js';
import Home from './/Main_Components/Home.js';
import AboutPage from './Main_Components/AboutPage';
import {Routes, Route} from 'react-router-dom';
import OrderOnline from './Main_Components/OrderOnline';
import Login from './Main_Components/Login';
import Menu from './Main_Components/Menu';
import Reservations from './Main_Components/Reservations';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutpage" element={<AboutPage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/orderonline" element={<OrderOnline/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
