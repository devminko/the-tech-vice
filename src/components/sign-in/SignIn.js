import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './sign-in.module.scss';

// *************************** SIGN IN COMPONENT *************************** //
const SignIn = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.signin}>

      <div className={style.formContainer}>
        <div className={style.header}>
          <h2 className={style.title}>Welcome Back!</h2>
          <h3 className={style.subtitle}>Sign In With Email or Google</h3>
        </div>

        <form onSubmit={onSubmit}> 
          <input 
            type='email'
            name='email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='off'
            autoSave='off'
          />
          <input 
            type='password'
            name='password'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete='off'
            autoSave='off'
          />
          
          <div className={style.buttons}>
            <button type='submit'>Sign In With Email</button>
            <button>Sign In With Google</button>
          </div>

          <div className={style.message}>
            <span>Don't have an account with us yet? <Link to='/signup' className={style.link}>Sign up here!</Link></span>
          </div>
        </form>
      </div>

    </div>
  )
};

export default SignIn;