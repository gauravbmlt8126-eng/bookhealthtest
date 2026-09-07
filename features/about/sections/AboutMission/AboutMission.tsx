import "./AboutMission.css";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="about-mission-section">
      <div className="about-mission-container">

        <div className="about-mission-block">
          <h3 className="about-mission-heading">Our Mission</h3>
          <p className="about-mission-text">
            Our mission is to make quality health checkups simple, accurate, and accessible for everyone. We help you understand your health and detect potential concerns early.
          </p>
        </div>

        <div className="about-mission-image">
          <Image
            src="/assets/images/gallery/aboutmission.jpg"
            alt="Corbett Treat Resort Cottage"
            fill
            sizes="(max-width: 992px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            loading="eager"
          />
        </div>

        <div className="about-mission-block">
          <h3 className="about-mission-heading">Our Vision</h3>
          <p className="about-mission-text">
            Our vision is to build a healthier community through regular health checkups and preventive care, helping everyone take better control of their health.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMission;
