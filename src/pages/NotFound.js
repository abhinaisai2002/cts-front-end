import React from 'react'
import NotFoundImage from './../assets/404.jpeg';

export default function NotFound() {
  return (
    <div className='h-100 d-flex justify-content-center align-items-center'>
      <img src={NotFoundImage} class="img-fluid" alt = "..." />
    </div>
  )
}
