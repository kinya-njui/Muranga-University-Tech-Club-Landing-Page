import "./AboutUs.css";
import aboutUsImage from "../../assets/AboutUs.jpeg";

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Murang'a University Tech Club (MUTC) is a vibrant community at
            Murang’a University dedicated to advancing the technological skills
            of its members. With a focus on programming, UI/UX design, machine
            learning, and more, MUTC provides an inclusive environment for
            students to explore, learn, and innovate. Our mission is to foster
            collaboration, creativity, and technical growth among students
            through a variety of workshops, seminars, and hands-on projects. We
            aim to equip our members with the knowledge and skills necessary to
            excel in today's rapidly evolving tech landscape. Join us to be part
            of a passionate community that strives to push the boundaries of
            technology and make a positive impact.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutUsImage} alt="About MUTC" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
