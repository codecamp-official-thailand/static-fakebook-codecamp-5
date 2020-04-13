import React from "react";
import Narbar from "../page-components/Narbar";
import PostList from "../page-components/PostList";

function Feed() {
  const postsList = [];

  return (
    <div>
      <Narbar />
      <PostList postsList={postsList} />
    </div>
  );
}

export default Feed;
