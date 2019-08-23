import React, {} from 'react';

import style from './button.module.scss';

// *************************** BUTTON COMPONENT *************************** //
const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button className={`
      ${isGoogleSignIn ? style.google : ''}
      ${inverted ? style.inverted : ''}
      ${style.button}
      `}
      {...otherProps}
    >
      {children}
    </button>
  )
};

export default Button;