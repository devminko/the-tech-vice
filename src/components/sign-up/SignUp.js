import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import style from './sign-up.module.scss';

// *************************** SIGN UP COMPONENT *************************** //
const SignUp = () => {
  const [ displayName, setDisplayName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className={style.signup}>

      <div className={style.header}>
        <h2 className={style.title}>Sign Up With Us Today!</h2>
        <h3 className={style.subtitle}>Create Your Account Below</h3>
      </div>

      <form onSubmit={onSubmit} className={style.form}> 
        <FormInput 
          type='displayName'
          name='displayName'
          label='Display Name'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          autoComplete='off'
          autoSave='off'
        />
        <FormInput 
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete='off'
          autoSave='off'
        />
        <FormInput 
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete='off'
          autoSave='off'
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete='off'
          autoSave='off'
        />
          
        <div className={style.buttons}>
          <Button type='submit'>Create Account</Button>
        </div>

        <div className={style.message}>
          <span>Already have an account with us? <Link to='/signin' className={style.link}>Sign in here!</Link></span>
        </div>
      </form>

    </div>
  )
};

export default SignUp;