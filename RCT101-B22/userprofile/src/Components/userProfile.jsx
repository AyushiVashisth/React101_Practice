function userProfile(props) {
    const { name, avatar_url, title, skillsets } = props;
    let skills = skillsets.map(function (el) {
      return (
        <div className="skills">
          <img height="20px" alt="imgs" src={el.icon} />
          <p>{el.description}</p>
        </div>
      );
    });
  
    return (
      <div className="userProfile">
        <div>
          <div className="nameFollow">
              <h1>{name}</h1>
              <button>Follow</button>
          </div>
          <p className="title">{title}</p>
          <div className="allskill">{skills}</div>
        </div>
        <img
          className="avatar"
          height="140px"
          alt="avatar_url"
          src={avatar_url}
        />
      </div>
    );
  }
  
  export default userProfile;