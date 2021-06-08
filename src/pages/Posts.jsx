import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Posts = () => {
  const [postDetails, setPostDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
      .then((response) => response.json())
      .then((result) => {
      setPostDetails(result)
    })
  },[params])

  console.log(postDetails);

  return (
    <div className="posts">
      <h2 style={{fontStyle:'italic', paddingBottom:'1rem'}}>  User {postDetails.userId} Blog </h2>
      <h3 style={{textDecoration:'underline', paddingBottom:'1rem', color:'indigo'}}>{postDetails.title}</h3>
      <h4>{ postDetails.body}</h4>
    </div>
  )
}

export default Posts;