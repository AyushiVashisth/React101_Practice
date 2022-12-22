function Avatar(props){
    const {src, name, rounded} = props;
    const styles = {
        borderRadius: rounded ? "50%" : "16px",
        border: "1px solid black",
    };

    // console.log(props)
    return (
        <>
          <img 
             src={src}        
             alt="avatar"
             width="200px"
             style={styles}
          />
          <h4>{name}</h4>
        </>
    )
}

export default Avatar;