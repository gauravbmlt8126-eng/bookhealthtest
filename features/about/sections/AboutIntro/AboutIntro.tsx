import "./AboutIntro.css";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaPlay } from "react-icons/fa";
import { WHATSAPP } from "@/constants";

const AboutIntro = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP.number}?text=Hello%20Corbett%20Treat%20Resort,%20I%20would%20like%20to%20inquire%20about%20hosting%20a%20wedding/event%20at%20your%20resort.`;
  return (
    <section className="about-intro-section">
      <div className="about-intro-container">
        <div className="about-intro-video">
          <Image
            src="/assets/images/gallery/Checkup/Checkup .jpg"
            alt="Corbett Treat Resort Video Thumbnail"
            fill
            className="about-intro-video-bg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="about-intro-play">
            <FaPlay style={{ marginLeft: "4px" }} />
          </div>
        </div>

        <div className="about-intro-content">
          <h2 className="about-intro-heading">
            A Complete Health Checkup for a Healthier You
          </h2>
          <p className="about-intro-text">
            Take control of your health with a comprehensive health checkup designed to give you a clear picture of your overall well-being. Our health packages include essential tests that help you understand your current health and identify potential concerns at an early stage.

          </p>
          <p className="about-intro-text">
            Get tested, understand your health, and take the right steps toward a healthier future.
          </p>
          <div className="about-intro-action">
            <Button href={whatsappUrl} variant="primary">
              CONNECT WITH US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
