import React from 'react'
import TrendingBlogCard from './TrendingBlogCard'

export default function TrendingBlogs() {
  return (
    <div className='rounded border border-dark p-2 mb-2'>
      <h4>Trending Blogs</h4>
      <TrendingBlogCard />
      <TrendingBlogCard />
      <TrendingBlogCard />
      <TrendingBlogCard />
      <TrendingBlogCard />
    </div>
  )
}
