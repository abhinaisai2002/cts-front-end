import React, { useEffect, useState } from 'react'
import BlogCategories from '../components/blogs/BlogCategories';
import Blogs from '../components/blogs/Blogs';
import RecentBlogs from '../components/blogs/RecentBlogs';

export default function HomePage() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // dispatch a call for getting all the posts
  },[])

  return (
    <div className='container h-100'>
      <div className='row my-5'>
        <div className='col-md-8'>
          <Blogs />
        </div>
        <div className='col-md-3'>
          <RecentBlogs />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
}
