// "use client";
// import { useEffect, useRef, useState } from "react";
// import "./Hero.css";
// import Image from "next/image";
// import { Button } from "@/components";
// import { BOOK_NOW_URL } from "@/constants";

// export default function Hero() {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0); // 0: video, 1: pool, 2: room, 3: garden

//   useEffect(() => {
//     // Detect mobile device layout
//     const checkMobile = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//     };

//     // Run on mount
//     checkMobile();

//     // Listen to viewport changes
//     window.addEventListener("resize", checkMobile);

//     // Native IntersectionObserver to pause video when scrolled out of view
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (videoRef.current) {
//             const video = videoRef.current as HTMLVideoElement;
//             if (!entry.isIntersecting) {
//               video.pause();
//             } else {
//               if (video.classList.contains("active")) {
//                 video.play().catch((err) => console.log("Autoplay blocked on scroll back:", err));
//               }
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       observer.disconnect();
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   // Slide transition effect once video finishes (currentSlide > 0)
//   useEffect(() => {
//     if (currentSlide === 0) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <header className="hero" ref={containerRef}>
//       <div className="video-background">
//         {/* Video Slide (Slide 0) */}
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           playsInline
//           // poster="/assets/images/gallery/hero-poster.png"
//           preload="auto"
//           onEnded={() => setCurrentSlide(1)}
//           className={`hero-media-element ${currentSlide === 0 ? "active" : ""}`}
//         >
//           <source
//             src="/assets/videos/wild-animal.mp4.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//         <div className="video-overlay" />
//       </div>

//       <div className="hero-bottom-content">
//         <div className="main-text">
//           <span className="hero-eyebrow">LUXURY IN THE WILD</span>
//           <h1 className="hero-title">
//             Wake Up To The Wild.
//             <br />
//             Stay Wrapped In Luxury.
//           </h1>
//           <p>
//             Located right next to Jim Corbett National Park, experience comfortable rooms,
//             beautiful nature, exciting safaris, and warm hospitality.
//           </p>
//         </div>

//         <div className="hero-action">
//           <Button
//             href={BOOK_NOW_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             variant="primary"
//             size="large"
//             className="hero-btn"
//           >
//             Book Now
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";

import { useEffect, useRef } from "react";
import "./Hero.css";
import { Button } from "@/components";
import { BOOK_NOW_URL } from "@/constants";

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Try to start video
    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    };

    // Start video when component loads
    playVideo();

    // Pause video when hero is not visible
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(container);

    // Handle browser resize
    const handleResize = () => {
      // Re-check video playback after viewport changes
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    window.addEventListener("resize", handleResize);

    // When user comes back to the tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      } else {
        video.pause();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return (
    <header className="hero" ref={containerRef}>
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-media-element active"
        >
          <source
            src="/assets/videos/wild-animal.mp4.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        <div className="video-overlay" />
      </div>

      <div className="hero-bottom-content">
        <div className="main-text">


          <h1 className="hero-title">
            Wake Up To Wellness. Stay
            <br />
            Ahead With Thyrocare.
          </h1>

          <p>
            With Thyrocare, experience convenient health testing, accurate diagnostics, advanced technology, and trusted healthcare services — all designed to keep you informed and one step ahead.
          </p>
        </div>

        <div className="hero-action">
          <Button
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="large"
            className="hero-btn"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}