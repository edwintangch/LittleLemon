import './App.css';
import Header from'./Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {
  return (
    <>
      <meta name="description" content="A very good restaurant"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="A very good restaurant"/>
      <meta name="og:image" content=""/>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
