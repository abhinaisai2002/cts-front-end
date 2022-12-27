import React from 'react';
import { BiLike,BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';

export default function BlogCard({myBlogs}) {
  return (
    <div className='border border-dark p-3 rounded'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h5 className="text-decoration-underline">Username</h5>
                <p className='text-black-50'>email | createdDate</p>  
            </div>
            {myBlogs && <div>
                <Button color={'danger'} text='Delete' type={'button'} />
            </div>}
        </div>
        
        <div>
            <h3>Heading of blog</h3>  
            <p className='font-monospace fw-lighter'>
                My Journey Growing up in a small town in Punjab, India,
                I always had a fascination with technology. I spent hours tinkering
                with gadgets and software, trying to understand how they worked and how I co…
            </p>
            <Link to="/blogs/101" >View more</Link>  
        </div>
        <div className='mt-2'>
            
            <span className='p-2 bg-success rounded text-white me-2'>
                78  <BiLike />
            </span>
              
            <span className='p-2 bg-primary rounded text-white me-2'>
                78  <BiComment />
            </span>
              
            <span className='p-2 bg-warning rounded text-white px-3'>
                <RiShareForwardLine />
            </span>  
        </div>
    </div>
  );
}
