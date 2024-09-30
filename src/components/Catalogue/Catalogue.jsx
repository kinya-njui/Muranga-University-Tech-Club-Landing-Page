import "./Catalogue.css";
import Title from "../Title/Title";
import Person1 from "../../assets/person1.jpg";

function CatalogueCard({ thumbnail, title, description }) {
  return (
    <div className="catalogue-card">
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <div className="catalogue-card-body">
        <h3 className="catalogue-card-title">{title}</h3>
        <p className="catalogue-card-description">{description}</p>
      </div>
    </div>
  );
}

function Catalogue() {
  return (
    <section className="catalogue-section">
      <Title subtitle="Leadership Page" maintitle="MUTC Team Leaders" />
      <div className="catalogue-cards-container">
        <CatalogueCard
          thumbnail={Person1}
          title="Dr. John Ndia"
          description="Patron of the club. Passionate about technology education."
        />
      </div>
    </section>
  );
}

export default Catalogue;
