import { Link, useNavigate } from "react-router-dom";
import "./AdventureCard.css";

const AdventureCard = ({ image, title, duration, price, category }) => {
  // helps navigate
  const navigate = useNavigate();

  return (
    // <Link to={"/adventure"}>
    <div className="ac-wrapper" onClick={() => navigate("/adventure")} id>
      <div className="ac-flag">{category}</div>
      <div className="ac-top">
        <img className="ac-image" src={image} alt={title} />
      </div>
      <div className="ac-bottom">
        <div className="ac-data">
          <span className="text">{title}</span>
          <span className="text">{`$${price}`}</span>
        </div>
        <div className="ac-data">
          <span className="text">Duration</span>
          <span className="text">{`${duration} Hours`}</span>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default AdventureCard;
