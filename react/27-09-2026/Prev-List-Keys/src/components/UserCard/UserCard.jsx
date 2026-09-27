import "./UserCard.css";

const UserCard = ({ name, email, age }) => {
  return (
    <div className="card-container">
      <div className="card-title">{`Name: ${name}`}</div>
      <div className="card-email">{`Email: ${email}`}</div>
      <div className="card-age">{`Age: ${age}`}</div>
    </div>
  );
};

export default UserCard;
