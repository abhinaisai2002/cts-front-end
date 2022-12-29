import React from 'react'
import {Input} from '../../input/Input'
import { Button } from '../../button/Button';
import useInput from '../../../hooks/useInput';
import './WriteComment.css'

export default function WriteComment({showLoading,startLoading,stopLoading}) {

    const {
      value: commentValue,
      isTouched: commentIsTouched,
      handleChange: commentHandleChange,
      hasError: commentHasError,
      handleBlur: commentHandleBlur,
    } = useInput('', (text) => text.trim().length > 0);

    const submitHandler = (event)=>{
      event.preventDefault();
      console.log('form submitted');
      startLoading();
    }

    return (
      <div className='container'>
        <form onSubmit={submitHandler}>
          <div className='row'>
            <div className='col'>
              <Input
                type='text'
                error='Comment cant be empty.'
                touched={commentIsTouched}
                errorCond={commentHasError}
                required
                value={commentValue}
                onChange={commentHandleChange}
                onBlur={commentHandleBlur}
                placeholder='Enter your comment.'
                disabled={showLoading}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-10'></div>
            <div className='col px-2'>
              <Button 
                text={
                  !showLoading? 'Comment' :<ButtonLoader />
                }
                disabled={showLoading}
                color='success' type="submit" />
            </div>
          </div>
        </form>
      </div>
    );
}


export const ButtonLoader = () => {
  return <span className="button-loader"></span>
}
