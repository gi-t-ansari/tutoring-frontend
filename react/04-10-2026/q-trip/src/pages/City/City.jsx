import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ADVENTURE_CARDS_DATA } from "../../constants";
import AdventureCard from "../../components/cards/AdventureCard/AdventureCard";
import "./City.css";

const City = () => {
  return (
    <div>
      <Header />
      <section className="top-section">
        <h1 className="heading">Explore all adventures</h1>
        <p className="description">
          Here's a list of places that you can explore in city
        </p>
      </section>
      <section className="adventures">
        {ADVENTURE_CARDS_DATA.map((ele) => (
          <AdventureCard
            key={ele.title}
            title={ele.title}
            image={ele.image}
            duration={ele.duration}
            price={ele.price}
            category={ele.category}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default City;
