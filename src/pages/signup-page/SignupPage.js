import React, { } from 'react';

import SignUp from '../../components/sign-up/SignUp';

import style from './signup-page.module.scss';

// *************************** SIGN UP PAGE *************************** //
const SignupPage = () => {
  return (
    <div className={style.signuppage}>

      <div className={style.container}>
        <SignUp />
      </div>

    </div>
  )
};

export default SignupPage;