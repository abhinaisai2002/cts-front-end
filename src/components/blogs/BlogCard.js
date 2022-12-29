import React from 'react';
import { BiLike,BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';

const Blog = {
    username: 'Username',
    email: 'email',
    createdDate: 'createdDate',
    blogHeading: 'Heading of blog',
    content: `My Journey Growing up in a small town in Punjab, India,
                I always had a fascination with technology. I spent hours tinkering
                with gadgets and software, trying to understand how they worked and how I co…
            `,
    likes: 78,
    comments:78
}

export default function BlogCard({blog,myBlogs}) {
  return (
    <div className='border border-dark p-3 rounded'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                  <h5 className="text-decoration-underline">{blog.username}</h5>
                <p className='text-black-50'>{blog.email} | {blog.createdDate}</p>  
            </div>
            {myBlogs && <div>
                <Button color={'danger'} text='Delete' type={'button'} />
            </div>}
        </div>
        
        <div>
            <h3>{blog.title}</h3>  
            <p className='font-monospace fw-lighter'>
                {blog.content}    
            </p>
              <Link to={`/blogs/${blog.blogId}`} >View more</Link>  
        </div>
        <div className='mt-2'>
            
            <span className='p-2 bg-success rounded text-white me-2'>
                {blog.likes}  <BiLike />
            </span>
              
            <span className='p-2 bg-primary rounded text-white me-2'>
                {blog.comments}  <BiComment />
            </span>
              
            <span className='p-2 bg-warning rounded text-white px-3'>
                <RiShareForwardLine />
            </span>  
        </div>
    </div>
  );
}
