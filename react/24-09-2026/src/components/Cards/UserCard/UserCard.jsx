import "./UserCard.css";

const UserCard = ({ imageLink, name, description }) => {
  return (
    <div className="card-container">
      <div className="card-top">
        <img className="card-img" src={imageLink} alt="user" />
      </div>
      <div className="card-bottom">
        <h2 className="card-heading">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default UserCard;
