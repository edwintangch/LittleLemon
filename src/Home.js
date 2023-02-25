import Main from './Main.js';
import Highlights from'./Highlights.js';
import Testimonials from './Testimonials.js';
import Abouts from './Abouts.js'

function Home() {
    return(
        <div>
            <Main />
            <Highlights />
            <Testimonials />
            <Abouts />
        </div>
    )
}

export default Home;