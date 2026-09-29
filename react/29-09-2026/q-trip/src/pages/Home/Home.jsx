import CityCard from "../../components/cards/CityCard/CityCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { CITY_CARDS_DATA } from "../../constants";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <h1 className="hero-title">Welcome to QTrip</h1>
        <p className="hero-desc">
          Explore the world with fantastic places to venture around
        </p>
      </section>
      <section className="city-cards">
        {CITY_CARDS_DATA.map((ele) => (
          <CityCard
            key={ele.title}
            title={ele.title}
            description={ele.description}
            image={ele.image}
          />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Home;
