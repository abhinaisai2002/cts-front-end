import React from 'react'
import useInput from '../hooks/useInput'
import validator from 'validator'
import { Input } from '../components/input/Input';


export default function SignUpPage() {

  const {
    value: emailValue,
    isTouched: emailIsTouched,
    handleChange: emailHandleChange,
    handleReset: emailHandleReset,
    hasError: emailHasError,
    handleBlur: emailHandleBlur,
  } = useInput('', validator.isEmail);

  const {
    value: passwordValue,
    isTouched: passwordIsTouched,
    handleChange: passwordHandleChange,
    handleReset: passwordHandleReset,
    hasError: passwordHasError,
    handleBlur: passwordHandleBlur,
  } = useInput('', validator.isStrongPassword);

  const {
    value: confirmPasswordValue,
    isTouched: confirmPasswordIsTouched,
    handleChange: confirmPasswordHandleChange,
    handleReset: confirmPasswordHandleReset,
    hasError: confirmPasswordHasError,
    handleBlur: confirmPasswordHandleBlur,
  } = useInput('', compareTo(passwordValue));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hi')
    if (emailHasError || passwordHasError || confirmPasswordHasError)
      alert("Enter the details correctly");
    
  }
 
  return (
    <div style={{height:'90vh'}} className="position-relative">
      <div className='border border-dark rounded p-5  w-50 position-absolute start-50 top-50 translate-middle'>

        <form onSubmit={handleSubmit}>
          <legend>
            <h1 className='font-monospace'>Create your account</h1>
          </legend>
          <Input
            label="Email"
            type="email"
            error="Please enter a proper email."
            touched={emailIsTouched}
            errorCond={emailHasError}
            required
            value={emailValue}
            onChange={emailHandleChange}
            onBlur={emailHandleBlur}
            placeholder="Enter your email address."
          />

          <Input
            label="Password"
            type="password"
            error="Please enter a strong Password."
            touched={passwordIsTouched}
            errorCond={passwordHasError}
            required
            value={passwordValue}
            onChange={passwordHandleChange}
            onBlur={passwordHandleBlur}
            placeholder="Enter your password."
          />

          <Input
            label="Confirm Password"
            type="password"
            error="Please enter the same Password."
            touched={confirmPasswordIsTouched}
            errorCond={confirmPasswordHasError}
            required
            value={confirmPasswordValue}
            onChange={confirmPasswordHandleChange}
            onBlur={confirmPasswordHandleBlur}
            placeholder="Re-Enter your password."
          />

          <div className='d-flex justify-content-end'>
            <input
              className='btn btn-success text-white'
              type="submit"
              value="SignUp"
              
            />
          </div>

        </form>

      </div>

    </div>

  )
}


const compareTo = (string1) => {
  return (string2) => {
    return string1 === string2;
  }
}

