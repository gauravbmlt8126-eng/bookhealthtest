// import "./AboutDedication.css";
// import Image from "next/image";

// const AboutDedication = () => {
//   return (
//     <section className="about-dedication-section">
//       <div className="about-dedication-container">

//         <div className="about-dedication-content">
//           <span className="about-dedication-subtitle">Great Resort Experience</span>
//           <h2 className="about-dedication-heading">
//             We are dedicated to helping you make beautiful memories, whether you want to relax quietly or enjoy outdoor adventures.
//           </h2>
//           <p className="about-dedication-text">
//             Every detail at Corbett Treat Resort is planned to make your holiday special. From our green gardens to the fresh ingredients in our kitchen, we commit to high standards of service. We believe in giving you a relaxing stay close to wild nature.
//           </p>
//         </div>

//         <div className="about-dedication-image">
//           <Image
//             src="/assets/images/gallery/bedroom-suite-2.jpeg"
//             alt="Corbett Treat Resort Bedroom Suite"
//             fill
//             sizes="(max-width: 992px) 100vw, 50vw"
//             style={{ objectFit: "cover" }}
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutDedication;


import "./AboutDedication.css";
import Image from "next/image";

const AboutDedication = () => {
  return (
    <section className="about-dedication-section">
      <div className="about-dedication-container">

        <div className="about-dedication-content">
          <span className="about-dedication-subtitle">
            YOUR HEALTH, OUR PRIORITY
          </span>

          <h2 className="about-dedication-heading">
            We Are Dedicated To Helping You Understand Your Health And Take The Right Steps Towards A Healthier Life.
          </h2>

          <p className="about-dedication-text">
            Our comprehensive health checkups are designed to make preventive care simple and accessible. Get reliable test results, identify potential health concerns early, and stay informed about your overall well-being.
          </p>
        </div>

        <div className="about-dedication-image">
          <Image
            src="/assets/images/gallery/halthhelping.png"
            alt="Health Checkup"
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutDedication;