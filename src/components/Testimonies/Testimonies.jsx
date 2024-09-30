import "./Testimonies.css";
import Title from "../Title/Title";
import person1 from '../../assets/person1.jpg';

function TestimonyCard({customerAvatar, customerName, title, text}) {
    return (
        <div className="testimony-card">
            <div className="testimony-card-customer-details">
                <img src={customerAvatar} alt={customerName} />
                <h4 className="testimony-card-customer-name">{customerName}</h4>
            </div>
            <h4 className="testimony-title">{title}</h4>
            <p className="testimony-text">{text}</p>
        </div>
    )
}

function Testimonies() {
  return (
    <section>
        <Title maintitle="Our team appreciate us" subtitle="Social Proof" />
        <div className="testimonies-container">
            <TestimonyCard
                customerAvatar={person1}
                customerName="John Santos"
                title="Best club Ever"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget."
            />
        </div>
    </section>
  );
}

export default Testimonies;
