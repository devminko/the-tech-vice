import React, { } from 'react';

import SignIn from '../../components/sign-in/SignIn';

import style from './signin-page.module.scss';

// *************************** SIGN IN PAGE *************************** //
const SigninPage = () => {
  return (
    <div className={style.signinpage}>

      <div className={style.container}>
        <SignIn />
      </div>

    </div>
  )
};

export default SigninPage;