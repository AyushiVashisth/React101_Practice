// import Courses ,Title and Usercard here
// keep a user object with mentioned properties and pass down to UserCard as prop

import Course from "./Components/Courses";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";

export default function App() {
  const userData = [
    {
      user_name: "Ayushi Vashisth",
      user_address: "Delhi",
      user_src: "https://avatars.githubusercontent.com/u/107119119?v=4",
      user_post: 101,
      user_followers: 8006
    }
  ];

  const data = userData.map((user) => (
    <UserCard
      name={user.user_name}
      avatar={user.user_src}
      address={user.user_address}
      post={user.user_post}
      followers={user.user_followers}
    />
  ));
  return (
    <>
      <Title />
      {data}
      <Course />
    </>
  );
}


//https://avatars.githubusercontent.com/u/107119119?v=4