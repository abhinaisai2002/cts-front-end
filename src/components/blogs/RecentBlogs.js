import React from 'react'
import RecentBlogCard from './RecentBlogCard'

export default function RecentBlogs() {
  return (
    <div className='rounded border border-dark p-2 mb-2'>
      <h4>Recent Blogs</h4>
      <RecentBlogCard />
      <RecentBlogCard />
      <RecentBlogCard />
      <RecentBlogCard />
      <RecentBlogCard />
    </div>
  )
}
