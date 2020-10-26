
import './App.css';
import { Button, Form, FormGroup, Label, Input }
from "reactstrap";

import { FacebookLoginButton } from 'react-social-login-buttons';
 


function App() {
  return (
    <form className="login-page">
     
      <h1>Mywebsite.com</h1>
      <h2 className="text-center">welcome</h2>
      <FormGroup>
         <label >Email</label>
         <input id="emaiil" type='Email' placeholder='Email'></input>
      </FormGroup>

      <FormGroup>
         <label>Password</label>
         <input id="pasword" type='Password' placeholder='Password'></input>
      </FormGroup>

      <button className="btn-lg btn-dark btn-block">
        log in
      </button>

      <div className="text-center pt-3">
        or continue with your social media
      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
      <div className="text-center">
        <a href="/sign-up">sign up</a>
        <span className="p-2">|</span>
        <a href="/forgot password">forgot password</a>





      </div>













    </form>
  );
}

export default App;
