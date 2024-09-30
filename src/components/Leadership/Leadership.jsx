import "./Leadership.css";
import Title from "../Title/Title";
import leaders from "../../data/leadership";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

function CatalogueCard({
  thumbnail,
  title,
  description,
  position,
  socialMediaIcons,
}) {
  return (
    <div className="catalogue-card">
      <h3 className="catalogue-card-title">{title}</h3>
      <div className="card-image">
        <img src={thumbnail} alt={title} />
        <p className="position">{position}</p>
      </div>
      <p className="catalogue-card-description">{description}</p>
      <SocialMediaIcons
        twitter={socialMediaIcons.twitter}
        facebook={socialMediaIcons.facebook}
        instagram={socialMediaIcons.instagram}
        linkedin={socialMediaIcons.linkedin}
      />
    </div>
  );
}

function SocialMediaIcons({ twitter, facebook, linkedin, instagram }) {
  return (
    <div className="social-icons">
      {twitter && (
        <a href={twitter} className="social-links">
          <FaSquareXTwitter />
        </a>
      )}
      {facebook && (
        <a href={facebook} className="social-links">
          <FaFacebook />
        </a>
      )}
      {instagram && (
        <a href={instagram} className="social-links">
          <IoLogoInstagram />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} className="social-links">
          <IoLogoLinkedin />
        </a>
      )}
    </div>
  );
}

function Leadership() {
  return (
    <section className="catalogue-section">
      <Title
        subtitle="Leadership Page"
        maintitle="MUTC Dedicated Team Leaders"
      />
      <div className="catalogue-cards-container">
        {leaders.map((leader, index) => (
          <CatalogueCard
            key={index}
            thumbnail={leader.thumbnail}
            title={leader.title}
            position={leader.position}
            description={leader.description}
            socialMediaIcons={leader.socialMediaIcons}
          />
        ))}
      </div>
    </section>
  );
}

export default Leadership;
