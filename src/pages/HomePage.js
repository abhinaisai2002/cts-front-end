import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BlogCategories from '../components/blogs/BlogCategories';
import Blogs from '../components/blogs/Blogs';
import TrendingBlogs from '../components/blogs/TrendingBlogs';
import Loading from '../components/loading/Loading';
import blogsThunk from '../store/thunks/blogsThunk';

export default function HomePage({...props}) {

  const { blogs } = useSelector(state => state.blogs);
  
  const dispatch = useDispatch();

  const [showLoading, setLoading] = useState(false);

  const { myBlogs } = props;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(blogsThunk.getBlogs());
      setLoading(false);
    },2000)
  }, [dispatch])
  
  if(showLoading)return <Loading />

  return (
    <div className='container h-100'>
      {myBlogs && <div className='my-5 border-bottom border-primary border-3'>
        <div className=''>
          <h1>Your Blogs</h1>
        </div>
      </div>}
      <div className='row my-5'>
        {blogs && <div className='col-md-8'>
          <Blogs {...props} blogs={blogs} />
        </div>}
        <div className='col-md-3'>
          <TrendingBlogs />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
}
