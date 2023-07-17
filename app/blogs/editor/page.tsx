import React from 'react'
import BlogEdit from '@components/Blog/BlogEdit'

export const metadata = {
  name: 'Editor',
  description: 'Blog Editor',
}

const page = () => {
  return (
    <div>
      <BlogEdit />
    </div>
  )
}

export default page