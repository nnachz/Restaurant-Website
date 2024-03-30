import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="container">
          <div className="navbar">
              <div className="logo">
                  <img className="logo-l" src={require('./images/logo.png')} alt="" />
                  <h1><i>Restaurant</i></h1>
              </div>
              <ul>
                  <li><a href="index.html">HOME</a></li>
                  <li><a href="#">MENU</a></li>
                  <li><a href="contact.html">CONTACTS</a></li>
                  <li><a href="login.html">SIGN UP</a></li>
              </ul>
          </div>
          <div className="content">
              <h1 className="h1">BEST FOOD <br />FOR YOU </h1>
              <div className="button">
                  <button onclick="" className="order-button">Order Now</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
