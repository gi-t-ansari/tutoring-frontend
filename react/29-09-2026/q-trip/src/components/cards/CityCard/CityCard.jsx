import "./CityCard.css";
import { Link } from "react-router-dom";

const CityCard = ({ image, title, description }) => {
  return (
    <Link to="/city">
      <div className="city-card-wrapper">
        <div className="image-wrapper">
          <img className="card-img" src={image} alt={title} />
        </div>
        <h3 className="city-title">{title}</h3>
        <p className="city-desc">{description}</p>
      </div>
    </Link>
  );
};

export default CityCard;
