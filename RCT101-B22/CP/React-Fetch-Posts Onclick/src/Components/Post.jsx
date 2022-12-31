import React from "react";
const Post = ({title, body}) => {
  return (
    <div className="post" style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      <h1>
        {/* Here show the title of the post  */}
        {title}
      </h1>
      <h3>
        {/* Here show the body of the post  */}
        {body}
      </h3>
    </div>
  );
};

export default Post;
