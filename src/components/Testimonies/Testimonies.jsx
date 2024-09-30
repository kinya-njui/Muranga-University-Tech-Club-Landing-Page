import "./Testimonies.css";
import Title from "../Title/Title";
import Carousel from "react-elastic-carousel";
import testimonies from "../../data/testimonies";
import ReactElasticCarousel from "react-elastic-carousel";

function TestimonyCard({ customerAvatar, customerName, title, text }) {
  return (
    <div className="testimony-card">
      <div className="testimony-card-customer-details">
        <img src={customerAvatar} alt={customerName} />
        <h4 className="testimony-card-customer-name">{customerName}</h4>
      </div>
      <h4 className="testimony-title">{title}</h4>
      <p className="testimony-text">{text}</p>
    </div>
  );
}

function Testimonies() {
  return (
    <section>
      <Title maintitle="Our team appreciate us" subtitle="Social Proof" />
      <div className="testimonies-container">
        <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={5000}>
          {testimonies.map((testimony, index) => (
            <TestimonyCard
              key={index}
              customerAvatar={testimony.customerAvatar}
              customerName={testimony.customerName}
              title={testimony.title}
              text={testimony.text}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonies;
