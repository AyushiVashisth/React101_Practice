import Card from './Card';
import { useState } from 'react';

// const initState = {
//     name: "",
//     height: "",
//     weight: "",
//     inputPower: ""
// };

const InputTags=()=>{
    const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [inputPower, setinputPower] = useState(0);
    // const [ formState, setFormState ] = useState(initState);
    const [herocard, setHerocard] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     setFormState({ ...formState, [e.target.name]: e.target.value });
    // };
    
    const addHero = (e) =>{
        e.preventDefault();
        setHerocard([...herocard, { name: name, height: height, weight: weight, inputPower: inputPower}]);
        // setFormState(initState);
    };

    const allShow = () => {
        setShowAll(true);
      };

      const Superhero = () => {
        setShowAll(false);
        const max = Math.max(...herocard.map((el) => el.inputPower), 0);
        console.log(max);    
        const filtered = [...herocard].filter(
          (el) => el.inputPower>= max
        );
        console.log(filtered);
        setFilteredData(filtered);
      };

    // const { name, height, weight, inputPower} = formState;
    return(
        <>
        <form>
            <input 
                data-testid="input-name" 
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <input 
                data-testid="input-height" 
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <input 
                data-testid="input-weight" 
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <input 
                data-testid="input-power" 
                type="text"
                value={inputPower}
                onChange={(e) => setinputPower(e.target.value)}
            /> 
            <button 
                data-testid="add-button"
                disabled={name === ""}
                onClick={addHero}
            >
                Add SuperHero
            </button>
        </form>
        <button data-testid="most-powerfull" onClick={Superhero}>Most Powerful Superhero</button>
        <button data-testid="all-superheroes" onClick={allShow}>Show All</button>
        {showAll ? <Card data={herocard} /> : <Card data={filteredData} />}
        </>
    )
}

export default InputTags;
