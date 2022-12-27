import React, { useEffect, useState } from 'react'
import BlogCategories from '../components/blogs/BlogCategories';
import Blogs from '../components/blogs/Blogs';
import RecentBlogs from '../components/blogs/RecentBlogs';

export default function HomePage({...props}) {

  const [blogs, setBlogs] = useState([]);

  const { myBlogs } = props;

  useEffect(() => {
    // dispatch a call for getting all the posts
  },[])

  return (
    <div className='container h-100'>
      {myBlogs && <div className='my-5 border-bottom border-primary border-3'>
        <div className=''>
          <h1>Your Blogs</h1>
        </div>
      </div>}
      <div className='row my-5'>
        <div className='col-md-8'>
          <Blogs {...props} />
        </div>
        <div className='col-md-3'>
          <RecentBlogs />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
}
