import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../component/Nav';
import '../css/SignUp.css';
import img from '../images/computer-sinup.svg';
import { FaUserAlt, FaPhoneAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillPlaySquare } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
const SignUp = () => {
  return (
    <>
      <Nav />
      <div className='pageWidth D-flex'>
        <div className='signUp D-flex-row'>
          <div className='left '>
            <h2>Sign Up</h2>
            <form action='#'>
              <div className='name'>
                <input type='text' placeholder='Your Name' />
                <FaUserAlt className='nameIcon' />
              </div>
              <div className='email'>
                <input type='email' placeholder='Your Email' />
                <MdEmail className='emailIcon' />
              </div>
              <div className='number'>
                <input type='number' placeholder='Mobile Number' />
                <FaPhoneAlt className='phoneIcon' />
              </div>
              <div className='prof'>
                <input type='text' placeholder='Your profession' />
                <AiFillPlaySquare className='profIcon' />
              </div>
              <div className='Spass'>
                <input type='password' placeholder='Password' />
                <FaLock className='SpassIcon' />
              </div>
              <div className='cpass'>
                <input type='Password' placeholder='Confirm Password' />
                <BiLockAlt className='cpassIcon' />
              </div>
              <button type='submit'>Register</button>
            </form>
          </div>
          <div className='right D-flex-column'>
            <img src={img} alt='signup' srcset='' />
            <NavLink to='/login' className='alReg'>
              I am already registered
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
