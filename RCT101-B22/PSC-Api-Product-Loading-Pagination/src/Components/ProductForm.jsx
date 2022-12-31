import { useState } from "react";

const initState = {
    title:"",
    price:"",
    imageUrl:"",
};

function ProductForm({handleFormSubmit}){
    const [ formState, setFormState ] = useState(initState);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(formState);
        setFormState(initState);
    };

    const { title, price, imageUrl } = formState;
    return (
        <div id="product-creation-form">
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title :
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Enter Product title"
                        value={title}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <br/>
                <label>
                    Price :
                    <input 
                        type="text" 
                        name="price"
                        placeholder="Enter Price"
                        value={price}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <br/>
                <label>
                    Image URL :
                    <input 
                        type="text" 
                        name="imageUrl"
                        placeholder="Enter Image URL"
                        value={imageUrl}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="CREATE PRODUCT" />
            </form>
        </div>
    );
}

export default ProductForm;