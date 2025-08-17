import "./App.css";

function App() {
  return (
    <div>
      <nav className="menubar">
        <div className="logo">
          <img src="brand_logo.png" alt="brand logo" />
        </div>
        <div>
          <ul className="list">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button>login</button>
        </div>
      </nav>
      <div className="hero">
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOE
          </p>
          <div className="shopbtn">
          <button className="shop">Shop Now</button>
          <button className="category">Category</button>
          </div>
          <p>Also Available On</p>
          <div className="twobrand">
          <img src="flipkart.png" alt="flipkart" />
          <img src="amazon.png" alt="amazon" />
          </div>
        </div>
        <div>
          <img src="shoe_image.png" alt="shoe" />
        </div>
      </div>
    </div>
  );
}

export default App;
