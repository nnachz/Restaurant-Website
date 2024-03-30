import './App.css';

function Login() {
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
                  <li><a href="menu.html">MENU</a></li>
                  <li><a href="contact.html">CONTACTS</a></li>
                  <li><a href="login.html">SIGN UP</a></li>
              </ul>
          </div>
          <div className="content">
          <form action="" class="form">
                <h1>Name Surname</h1>
                <input class="input-signup" type="text" placeholder="Name and surname" required/>
                <h1>Username</h1>
                <input class="input-signup" type="text" placeholder="Username" required/>
                <h1>E-mail</h1>
                <input class="input-signup" type="text" placeholder="example@gmail.com" required/>
                <h1>Password</h1>
                <input class="input-signup" type="text" placeholder="**********" required/> 
                <button>Register</button>
            </form>
            </div>
          </div>
      </div>
  );
}

export default Login;
