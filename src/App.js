import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Home from './Home.js';
import AboutPage from './AboutPage';
import {Routes, Route} from 'react-router-dom';
import OrderOnline from './OrderOnline';
import Login from './Login';
import Menu from './Menu';
import Reservations from './Reservations';


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
