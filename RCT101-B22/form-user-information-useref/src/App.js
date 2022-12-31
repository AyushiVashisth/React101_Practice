import './App.css';
import {useState} from 'react';

const initState = {
  name: "",
  gender: "",
  role: "",
  isMarried: false,
};

function App() {
  const [ formState, setFormState ] = useState(initState);
  const [ users, setUsers ] = useState([]);

  const handleChange = (e) => {
    // console.log(e); // event
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.name, e.target.checked)
    const { type, checked, value, name } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormState({ ...formState, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform some operations here
    setUsers( [ ...users, formState]);
    setFormState(initState)
  };

  console.log("current form state", formState);
  const { name, gender, role, isMarried} = formState;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>FORMS</h1>
        <label>
          Name :
          <input 
            type="text"
            phaceholder="NAme"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <label>
          Gender :
          <select
            name = "gender"
            value={gender}
            onChange={handleChange}
          >
            <option value="female">FEMALE</option>
            <option value="man">MAN</option>
            <option value="other">OTHER</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          ROLE :
          <select
            name = "role"
            value={role}
            onChange={handleChange}
          >
            <option value="teamLeader">Team Leader</option>
            <option value="technical">Technical</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullStack">Full stack developer</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
          ARE YOU MARRIED :
          <input 
            type="checkbox"
            name="isMarried" 
            checked={isMarried}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
