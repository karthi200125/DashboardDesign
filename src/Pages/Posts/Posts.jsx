import React from 'react'
import './Posts.scss'
import Search from '../../Components/Search'

const Posts = () => {

  const selectPost = ["All Posts", "New Posts"]



  return (
    <div className='posts'>
      <div className="posttop">
        <h1>Posts</h1>
        <p>10 posts</p>
      </div>
      <div className="postcon">
        <div className="filterposts">
          <h1>Filtered Posts</h1>
          <select name="" id="">
            {selectPost.map((select) => (
              <option value="" key={select}>{select}</option>
            ))}
          </select>
          <p>10 posts</p>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Posts