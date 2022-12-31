import React from "react"

const ProductItem = ({ title, imageUrl, price}) => {
    return (
        <div style={{border:"1px solid gray"}}>
            <img 
                src={imageUrl} 
                alt={title}
                width="300px"
                height="300px"
            />
            <h6>Title : {title}</h6>
            <h6>Price : {price}</h6>
        </div>
    );
};

export default ProductItem;