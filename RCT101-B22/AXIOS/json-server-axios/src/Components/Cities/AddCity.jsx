import { useState } from "react";

function AddCity({handleAddCity}){
    const [ formState, setFormState ] = useState({
        name: "",
        population: "",
        country: "India"
    });
    // name, population, country
    const handleChange = (e) => {
        const val = e.target.type === "number" ? Number(e.target.value): e.target.value;
        setFormState({
            ...formState,
            [e.target.name]:val
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // post request with the body;
        console.log(formState);
        handleAddCity(formState);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name= "name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="ADD CITY NAME"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name= "population"
                        value={formState.population}
                        onChange={handleChange}
                        placeholder="ADD CITY POPULATION"
                    />
                </div>
                <div>
                    <input 
                        type="submit"
                        vlaue="submit"
                    />
                </div>
            </form>
        </div>
    )
}