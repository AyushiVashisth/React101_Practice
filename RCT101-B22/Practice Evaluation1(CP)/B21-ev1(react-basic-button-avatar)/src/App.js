import "./styles.css";
import Avatar from "./Components/Avatar";
import Button from "./Components/Button";

export default function App() {
  const data={
    image:"https://via.placeholder.com/140x100",
    caption:"Masai School"
  }
  return (
    <div className="App">
      {/* add Button and  Avatar component here */}
      <Avatar image={data.image} caption={data.caption} />
      <Button />
    </div>
  );
}
