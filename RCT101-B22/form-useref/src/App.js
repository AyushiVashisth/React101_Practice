import './App.css';
import {useState} from 'react';

const initState = {
  username: "",
  password: "",
  country: "",
  isMarried: false
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
  const { username, password, country, isMarried} = formState;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>FORMS</h1>
        <label>
          USERNAME :
          <input 
            type="text"
            phaceholder="USERNAME"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <label>
          PASSWORD :
          <input 
            type="text"
            phaceholder="PASSWORD"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <label>
          COUNTRY :
          <select
            name = "country"
            value={country}
            onChange={handleChange}
          >
            <option value="india">INDIA</option>
            <option value="uae">UAE</option>
            <option value="china">CHINA</option>
            <option value="usa">USA</option>
            <option value="canada">CANADA</option>
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
