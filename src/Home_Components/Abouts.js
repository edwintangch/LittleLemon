import './Abouts.css'
import about1 from '../Assets/about1.jpg';
import about2 from '../Assets/about2.jpg';


function Abouts() {
    return (
      <div className="abouts-background">
        <div className="abouts grid">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="white-font">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          <img src={about2} alt="a chef preparing some foods"></img>
          <img src={about1} alt="2 chefs talking"></img>
        </div>
      </div>
    );
  }

export default Abouts;