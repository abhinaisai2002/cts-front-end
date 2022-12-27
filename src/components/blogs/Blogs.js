import React from 'react';
import Blog from './BlogCard';

export default function Blogs({...props}) {
    return (
        <div className=''>
            <Blog {...props} />
            <Blog {...props} />
            <Blog {...props} />
            <Blog {...props} />
        </div>
    );
}
