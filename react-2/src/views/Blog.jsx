import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
    const { blogId, commentId } = useParams()
    
    return (
    <div>
      Blog Sayfası - {blogId} numaralı Bloğun {commentId} numaralı yorumu.
    </div>
  )
}

export default Blog
