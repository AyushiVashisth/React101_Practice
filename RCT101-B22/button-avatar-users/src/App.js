import './App.css';
import Button from "./Components/Button";
import Avatar from './Components/Avatar';

const squarArr = [1, 2, 3, 4, 5].map((el) => <li>{el * 2}</li>);

const users = [
  {
    id: 1,
    avatar_url: "https://tse3.mm.bing.net/th?id=OIP.SntFgR71d5oyW1VyQDjIYAHaK4&pid=Api&P=0",
    name: "Javacript",
    rounded: false,
  },
  {
    id: 2,
    avatar_url: "https://tse1.mm.bing.net/th?id=OIP.YePVzjkjsadOqzQ03wl5kAHaEO&pid=Api&P=0",
    name: "React",
    rounded: true,
  },
];

const userAvatar = users.map((user) => (
  <Avatar 
    key={user.id}
    src={user.avatar_url} 
    name={user.name} 
    rounded={user.rounded} 
  />
));

function App() {
  return (
    <div className="App">
      {userAvatar}
      <Button text="Click me" />
      <ul>{squarArr}</ul>
    </div>
  );
}

export default App;
