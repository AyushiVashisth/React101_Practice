// your code goes here
// do a default export

import { useState } from "react";

const UserCard = (props) => {

  const {name, avatar, posts, followers, address} = props;
  const [text, setText] = useState(false);
  const handleClick = () => {
    setText(!text);
  };
  let styles = {
    borderRadius: "50%"
  };
  return (
    <>
      <img
        style={styles}
        src={avatar}
        alt={name} 
      />
      <h2 data-testid = "user_name">{name}</h2>
      <p data-testid ="user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid ="user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid ="user_followers">{followers}</p>
      <button onClick={handleClick}>{text ? "following" : "follow"}</button>
    </>
  );
};

export default UserCard;
