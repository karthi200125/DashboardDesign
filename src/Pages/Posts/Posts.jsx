import React from 'react';
import { IoMdHeart } from "react-icons/io";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import Search from '../../Components/Search';
import { POSTS, USERS } from '../../dummy';
import './Posts.scss';

const Posts = () => {

  const selectPost = ["All Posts", "New Posts"]

  return (
    <div className='posts'>
      <div className="posttop">
        <h1>Posts</h1>
        <p>{POSTS.length} posts</p>
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
        <div className="allposts">
          {POSTS.map((post) => {
            const user = USERS.find((user) => user.id === post.userId);
            return (
              <div className="post" key={post.id}>
                <img src={post.potsImage} alt="" />
                <div className="postbtm">
                  <div className="l">
                    <img src={user?.img} alt="" />
                    <h1>{user?.username}</h1>
                    <div className="like">
                      <IoMdHeart className='heart' />
                      <span>{post.likes} likes</span>
                    </div>
                  </div>
                  <div className="r">
                    <MdOutlineDeleteOutline className='postd' size={20} />
                    <MdModeEdit className='postu' size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Posts