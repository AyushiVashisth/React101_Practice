export default function Button({text,id,handleClick}){
    return(
        <button onClick={()=>handleClick(id)}>
            {text}
        </button>
    )
}