"use client";

import Image from "next/image";
import Slider from "react-slick";

import "./globals.css";
import Hero from "@/features/home/sections/Hero";
import AboutSection from "@/features/home/sections/AboutSection";
import EventsSection from "@/features/home/sections/EventsSection";
import { blogPosts } from "@/features/data/blog";

export default function Home() {
  const partners = [
    {
      id: 1,
      image: "/assets/images/gallery/healthians.webp",
      name: "Partner 1",
    },
    {
      id: 2,
      image: "/assets/images/logo.webp",
      name: "Partner 2",
    },
    {
      id: 3,
      image: "/assets/images/gallery/healthians.webp",
      name: "Partner 3",
    },
    {
      id: 4,
      image: "/assets/images/logo.webp",
      name: "Partner 4",
    },
    {
      id: 5,
      image: "/assets/images/gallery/healthians.webp",
      name: "Partner 5",
    },
    {
      id: 6,
      image: "/assets/images/logo.webp",
      name: "Partner 6",
    },
  ];

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main>
      <Hero />

      <AboutSection />

      <EventsSection />

      {/* Blog Section */}
      <section className="home-blog-section">
        <div className="home-blog-container">
          <div className="home-blog-header">
            <h2 style={{ color: "#F16055" }}>Health Insights Blog</h2>

            <p>
              Explore practical health tips, preventive care guidance, and trusted insights to help you make informed decisions about your well-being.
            </p>
          </div>

          <div className="home-blog-grid">
            {blogPosts.slice(0, 4).map((blog) => (
              <article
                className="home-blog-card"
                key={blog.id}
              >
                <div className="event-image-wrap">
                  <Image
                    src={blog.image}
                    alt="Blog image"
                    width={800}
                    height={1000}
                    sizes="(max-width: 767px) 100vw, 310px"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>


                {/* 
                <div className="home-blog-content">
                  <span className="home-blog-subtitle">
                    {blog.subtitle}
                  </span>

                  <h3>{blog.title}</h3>

                  <p>{blog.description}</p>

                  <a href="#">Read More →</a>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>



      <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="my-12 w-full px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <div className="mx-auto  home-blog-container">

          {/* Heading */}
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="font-serif text-4xl font-medium leading-tight text-[#164c3b] sm:text-5xl lg:text-5xl small" style={{ color: "#F16055", marginBottom: "30px" }}>
              Our Official Partner
            </h2>
          </div>
          <div className="partner-slider w-full">
            <Slider {...sliderSettings}>
              {partners.map((partner) => (
                <div key={partner.id} className="px-1 sm:px-2">
                  <div className="flex h-[120px] w-full items-center justify-center bg-white px-4 py-4 shadow-[0_2px_14px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] sm:h-[135px]">

                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={220}
                      height={100}
                      className="h-[90px] w-[220px] object-contain "
                    />

                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </section>
    </main>
  );
}