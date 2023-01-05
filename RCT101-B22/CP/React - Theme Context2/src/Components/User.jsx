import React from 'react'

export default function User({img, level, name, posts, position, isDarkTheme}) {
    
    return (
        <div data-testid = "user" style={isDarkTheme ? {backgroundColor:"black", color:"white", accentColor:"yellow"} : {backgroundColor: "white", color: "black", accentColor:"blue"}}>
            <img style={{width: "50px", height: "50px"}} src={img} alt={name}/>
            <p>{name}</p>
            <p>{position}</p>
            <p>{level}</p>
            <p>{posts}</p>
            <input style={{accentColor: isDarkTheme ? "yellow" : "blue" }} data-testid = "level" type = "range" />
        </div>
    )
}
