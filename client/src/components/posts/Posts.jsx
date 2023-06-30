import React from 'react'
import "./posts.scss";
import Post from '../post/Post';
import { useQuery } from 'react-query';
import { makeRequest } from '../../axios';

const Posts = ({userId}) => {

  // Now we shall dynamically add the posts
  // posts is query name below:

  const { isLoading, error, data } = useQuery('posts', () =>
    makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    })
  )

  console.log(data);

// ----------------------------------------****-------------------------------------------
  //   //TEMPORARY
  // const posts = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     userId: 1,
  //     profilePic:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Doe",
  //     userId: 2,
  //     profilePic:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
  //   },
  // ];

  return (
    <div className='posts'>
       { error 
       ? "Something Went Wrong!" 
       : isLoading
       ? "loading"
       : data.map((post) =>
            <Post post = {post} key={post.id} />
        )}
    </div>
  )
}

export default Posts