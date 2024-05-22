import React, { useState } from 'react';
import SignImj from './SignImj';
import { NavLink, useNavigate} from 'react-router-dom';
const Signup = () => {

  const [inputVal,setInputVal]=useState({
    name:"",
    email:"",
    dob:"",
    password:""
  })

  const navigate = useNavigate();
  const [data,setData]= useState([])

  const setInput = (e)=>{
    setInputVal({...inputVal,[e.target.name]:e.target.value})
  }

  const handleClick = (e)=>{
    e.preventDefault();
    console.log(inputVal);

    const {name,email,dob,password} = inputVal;
    if(name===""){
      alert("name field is required")
    }else if(email===""){
      alert("Email field is required")
    }else if(!email.includes("@")){
      alert("Incorrect email")
    }else if(dob===""){
      alert("date of birth is required")
    }else if(password===""){
      alert("password is required")
    }else if(password.length<=5){
      alert("password length should be greater than 5")
    }
    else{
      console.log("data submitted successfuly")

      localStorage.setItem("userCredentials",JSON.stringify([...data,inputVal]));
      navigate('/Login');

    }
  }

  return (
    <>
      <div className='container mt-3 '>
        <section className='d-flex justify-content-between'>
          <div className='left_data' style={{width:"100%"}}>
            <h3 className='text-center col-lg-6'>Sign Up</h3>
            <form className='mt-3'>
            <div className="mb-3 col-lg-6">
                <input type="text" className="form-control" id="name" name='name' placeholder='Your Name' onChange={setInput}/>
              </div>
              <div className="mb-3 col-lg-6">
                <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" onChange={setInput} placeholder='Your Email'/>
              </div>
              <div className="mb-3 col-lg-6">
                <input type="date" className="form-control" onChange={setInput} id="dob" name='dob'/>
              </div>
              <div className="mb-3 col-lg-6">
                <input type="password" className="form-control" onChange={setInput} id="password" name='password' placeholder='Your Password' />
              </div>
              
              <button type="submit" className="btn btn-primary col-lg-6" style={{background:"rgb(67,185,127)"}} onClick={handleClick}>Submit</button>
           
            </form>

            <p className='mt-3'>Already Have an Account <span><NavLink to='/Login'>Signin</NavLink></span></p>
          </div>
          <SignImj/>
        </section>
      </div>
    </>
  );
}

export default Signup;
