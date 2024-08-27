import SignUpForm from '../../components/sign-up-form/sign-up-form.tsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.tsx';
import './authentication.styles.scss';
import React from 'react';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
