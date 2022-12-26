import React from 'react';
import { BiLike,BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function BlogCard() {
  return (
    <div className='border border-dark p-3 rounded'>
        <div>
            <div>
                <h5 className="text-decoration-underline">Username</h5>
                <p className='text-black-50'>email | createdDate</p>  
            </div>
        </div>
        
        <div>
            <h3>Heading of blog</h3>  
            <p className='font-monospace fw-lighter'>
                My Journey Growing up in a small town in Punjab, India,
                I always had a fascination with technology. I spent hours tinkering
                with gadgets and software, trying to understand how they worked and how I co…
            </p>
            <Link to="/" >View more</Link>  
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
