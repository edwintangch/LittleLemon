import './Testimonials.css';
import ReviewCard from '../Card_Components/ReviewCard';
import person1 from '../Assets/person1.jpg';
import person2 from '../Assets/person2.jpg';
import person3 from '../Assets/person3.jpg';
import person4 from '../Assets/person4.jpg';

function Testimonials() {
    return (
        <div className="testimonials-background">
          <div className="testimonials">
            <h1>Testimonials</h1>
            <div className='grid'>
              <ReviewCard photo={person1} rating={4} name="Teri Dactyl" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
              <ReviewCard photo={person2} rating={5} name="Rod Knee" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
              <ReviewCard photo={person3} rating={4} name="Rose Bush" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
              <ReviewCard photo={person4} rating={5} name="Anne Thurium" reviewtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
            </div>
          </div>
        </div>
    );
  }

export default Testimonials;