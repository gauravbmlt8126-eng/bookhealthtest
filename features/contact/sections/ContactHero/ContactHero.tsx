// import Image from "next/image";

// export default function ContactHero() {
//   return (
//     <section className="cp-hero">
//       <Image
//         src="/assets/images/gallery/exterior-dusk-...jpg"
//         alt="Corbett Treat Resort at dusk"
//         fill
//         priority
//         className="cp-hero-bg"
//         style={{ objectPosition: "top", objectFit: "cover" }}
//       />
//       <div className="cp-hero-overlay" />
//       <div className="cp-hero-content">
//         <span className="cp-hero-eyebrow">Contact Us</span>
//         <h1 className="cp-hero-title">Get In Touch</h1>
//         <p className="cp-hero-desc">
//           Planning a getaway or have a special request? Our team is here to
//           help you craft the perfect stay.
//         </p>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="cp-hero">
      <Image
        src="/assets/images/gallery/exterior-dusk.jpg"
        alt="Health Checkup"
        fill
        priority
        className="cp-hero-bg"
        style={{ objectPosition: "center", objectFit: "cover" }}
      />
      <div className="cp-hero-overlay" />

      <div className="cp-hero-content">
        <span className="cp-hero-eyebrow" style={{ color: "white" }}>Contact Us</span>

        <h1 className="cp-hero-title">Get In Touch</h1>

        <p className="cp-hero-desc">
          Have questions about our health checkups? Our team is here to help you choose the right tests and take the next step towards better health.
        </p>
      </div>
    </section>
  );
}