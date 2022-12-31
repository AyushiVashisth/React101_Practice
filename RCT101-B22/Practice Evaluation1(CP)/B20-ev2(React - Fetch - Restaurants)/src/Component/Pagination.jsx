import React from "react";

function Pagination({current, onChange,total}) {

  let pages = new Array(total).fill(0).map((a,i) => 
  <button 
    style={{borderColor : i+1 === current ? 'red' : 'gray'}} 
    onClick={()=>onChange(i+1)}
  >
      {i+1}
  </button>)
  return (
  <div data-testid ="page-container">
  {pages}
  </div>
 
  );
}

export default Pagination;
