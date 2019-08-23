import React, {} from 'react';

import style from './form-input.module.scss';

// *************************** FORM INPUT COMPONENT *************************** //
const FormInput = ({ label, onChange, ...otherProps }) => {
  return (
    <div className={style.group}>
      <input className={style.forminput} onChange={onChange} {...otherProps} />
      {
        label ?
        (<label className={`${otherProps.value.length ? style.shrink : ''} ${style.formInputLabel}`}>
          {label}
        </label>)
        : null
      }
    </div>
  )
};

export default FormInput;