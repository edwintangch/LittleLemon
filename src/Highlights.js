import './Highlights.css';

function Highlights() {
    return (
        <div className='.highlights'>
          <div>
            <h1>This Weeks Specials!</h1>
            <span className="button-bright">Online Menu</span>
          </div>
          <div>
            <div className="menu-card">Greek salad</div>
            <div className="menu-card">Bruchetta</div>
            <div className="menu-card">Lemon Dessert</div>
          </div>
        </div>
    );
  }

export default Highlights;