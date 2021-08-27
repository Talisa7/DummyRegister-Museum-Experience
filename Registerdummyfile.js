import React, {useState} from "react";
import "./Register.css";
import regMobile from "./Registerimages/regMobile.png";
import validation from "./validation";
import {  Redirect, useLocation } from "react-router-dom";
import {useAuth} from "./auth";
import axios from 'axios'


function Register(props) {
  const [isLoggedIn, setLoggedIn]=useState(false);
  const [username, setUserName]= useState("");
  const [password, setPassword]=useState("");
  const [date, setDate]=useState("");
  const [email, setEmail]= useState("");
  const [verifypassword, setVerifyPassword] =useState("");
  const [phone, setPhone] = useState("");
  const {setAuthTokens}=useAuth();
  const location = useLocation();
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState([]); 
  const referer = "/account";
  //console.log (location.state);
  

  function postLogin (){
      axios
      .post('https://museumexperience.herokuapp.com/auth/signup',{
    
      } )
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          return;
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }
 

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  }

 
  const handleChange =(event) => {
    setValues({
      ...values,
      [event.target.name] : event.target.value,
    });
  }
  

 
  return (
    <div className="reg_body">
      <div className='reg_mobile'>
        <img className="reg_mobile_img" src={regMobile} alt="cartoon hands using online registration form" />
        <p className='reg_label_mobile'>Member Registration</p>
        <form className="reg_mobile_form">
          <label className='reg_label' for="username">Full Name</label><br />
          <input className='reg_input' type="text" name="username" id="username" value={values.username}onChange={(e) => {
                setUserName(e.target.value);}}></input>{errors.username && <p className="error">{errors.username}</p>}<br />
          <label className='reg_label' for="dateofbirth">Date of Birth mm/dd/yy</label><br />
          <input className='reg_input' type="date" name="date" id="date" value={values.date} onChange={(e) => {
                setDate(e.target.value);
              }}></input>{errors.date && <p className="error">{errors.date}</p>}<br />
          <label className='reg_label' for="phone">Phone Number</label><br />
          <input className='reg_input' type="tel" name="phone" id="phone" value={values.phone}onChange={(e) => {
                setPhone(e.target.value);
              }}></input>{errors.phone && <p className="error">{errors.phone}</p>}<br />
          <label for="email">Email</label><br />
          <input type="email" name="email" id="email"value={values.email}onChange={(e) => {
                setEmail(e.target.value);
              }}></input><br />{errors.email && <p className="error">{errors.email}</p>}
          <label for="password">Password</label><br />
          <input type="password" name="password" id="password" value={values.password}onChange={(e) => {
                setPassword(e.target.value);
              }}></input>{errors.password && <p className="error">{errors.password}</p>}<br />
          <label className='reg_label' for="cPW">Confirm Password</label><br />
          <input className='reg_input' type="password" name="verifypassword" id="verifypassword" value={values.verifypassword}onChange={(e) => {
                setVerifyPassword(e.target.value);
              }}></input>{errors.verifypassword && <p className="error">{errors.verifypassword}</p>}
        </form>
        <button className="reg_btn_mobile"onClick={handleRegisterSubmit}>Registration</button>
      </div>

      <div className="reg_image">
        <div className="reg_formcontainer">
          <div className='reg_top'>
            <button className="reg_b1 reg_deskT_topFont"> Log In </button>
            <p className="reg_p reg_deskT_topFont">Register</p>
          </div>
          <h1 className='reg_h1'>Register for special updates</h1>
          <div className="reg_form">
            <div className="reg_F1-a">
              <form className='reg_f1'>
                <label className='reg_label' for="username">Full Name</label><br />
                <input className='reg_input' type="text" name="username" id="username" value={values.username} onChange={(e) => {
                setUserName(e.target.value);}}></input>{errors.username && <p className="error">{errors.username}</p>}<br />
                <label className='reg_label' for="emailaddress">Email Address</label><br />
                <input className='reg_input' type="email" name="email" id="email"value={values.email}onChange={(e) => {
                setEmail(e.target.value);}}></input>{errors.email && <p className="error">{errors.email}</p>}<br />
                <label className='reg_label' for="password">Password</label><br />
                <input className='reg_input' type="password" name="password" id="password"value={values.password}onChange={(e) => {
                setPassword(e.target.value);}}></input>{errors.password && <p className="error">{errors.password}</p>}<br />
              </form>
            </div>
            <div className="reg_f2">
              <form>
                <label className='reg_label' for="phone">Phone Number</label><br />
                <input className='reg_input' type="tel" name="phone" id="phone" value={values.phone}onChange={(e) => {
                setPhone(e.target.value);}}></input>{errors.phone && <p className="error">{errors.phone}</p>}<br />
                <label className='reg_label' for="date">Date of Birth mm/dd/yy</label><br />
                <input className='reg_input reg_dob' type="date" name="date" id="date"value={values.date}onChange={(e) => {
                setDate(e.target.value);}}></input>{errors.date && <p className="error">{errors.date}</p>}<br />
                <label className='reg_label' for="password">Confirm Password</label><br />
                <input className='reg_input' type="password" name="verifypassword" id="verifypassword" value={values.verifypassword}onChange={(e) => {
                setVerifyPassword(e.target.value);}}></input>{errors.verifypassword && <p className="error">{errors.verifypassword}</p>}<br />
              </form>
            </div>
          </div>
          <button className="reg_b2" onClick={handleRegisterSubmit}>Continue</button>
      
        </div>
      </div>
    </div>
  );
}
 export default Register;
