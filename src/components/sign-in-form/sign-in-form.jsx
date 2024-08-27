import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.tsx';
import './sign-in-form.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.tsx';
import {
  googleSignInStart,
  emailSignInStart
} from '../../store/user/user.action.ts';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
    //? No longer using with redux saga
    // await signInWithGooglePopup();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
