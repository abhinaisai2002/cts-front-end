import React from 'react';
import Blog from './BlogCard';

export default function Blogs({blogs,...props}) {
    return (
        <div className=''>
            {blogs.map(blog => (
                <Blog key={blog.blogId} {...props} blog={blog}/>
            ))}
            
        </div>
    );
}
