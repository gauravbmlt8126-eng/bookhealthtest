"use client";

import React, { useState } from "react";
import "./EventsSection.css";
import { testPackages } from "@/features/data/testPackages";

const eventTypes = [
  {
    id: "Healthy India Full Body Checkup",
    title: "Healthy India Full Body Checkup ",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/1.png",
    price: "1950",
    mrp: "8650",
    test: "129 Tests",
  },
  {
    id: "Executive Full Body Health Checkupp",
    title: "Executive Full Body Health Checkup",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/2.png",
    price: "1745",
    mrp: "6050",
    test: "127 Tests",
  },
  {
    id: "Camp Profile 1-2-3. Now 50% Off",
    title: "Camp Profile 1-2-3. Now 50% Off",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/3.png",
    price: "1050",
    mrp: "1950",
    test: "81 Tests",
  },
  {
    id: "New Aarogaym Basic-1 With USTSH",
    title: "New Aarogaym Basic-1 With USTSH",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/4.png",
    price: "895",
    mrp: "1589",
    test: "75 Tests",
  },
  {
    id: "Women Basic Profile With Hormones Test",
    title: "Women Basic Profile With Hormones Test",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/5.png",
    price: "1800",
    mrp: "1800",
    test: "73 Tests",
  },
  {
    id: "Jaanch Nutra 360 with Vitamins & Testosterone",
    title: "Jaanch Nutra 360 with Vitamins & Testosterone",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/6.png",
    price: "1850",
    mrp: "3850",
    test: "77 Tests",
  },
  {
    id: "Wellness Basic",
    title: "Wellness Basic",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/7.png",
    price: "1200",
    mrp: "2250",
    test: "66 Tests",
  },
  {
    id: "Jaanch - Monsoon Fever Panel Basic (Rapid)",
    title: "Jaanch - Monsoon Fever Panel Basic (Rapid)",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/8.png",
    price: "754",
    mrp: "1050",
    test: "34 Tests",
  },
  {
    id: "Complete Health Checkup with Vitamins",
    title: "Complete Health Checkup with Vitamins",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/9.png",
    price: "1750",
    mrp: "2050",
    test: "122 Tests",
  },
  {
    id: "Senior Citizen Male Full Body Checkup - 2026",
    title: "Senior Citizen Male Full Body Checkup - 2026",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/10.png",
    price: "2600",
    mrp: "5050",
    test: "127 Tests",
  },
  {
    id: "Aarogyam Male - 2026",
    title: "Aarogyam Male - 2026",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/11.png",
    price: "2170",
    mrp: "4550",
    test: "103 Tests",
  },
  {
    id: "Aarogyam female - 2026 Premium",
    title: "Aarogyam Female - 2026",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/12.png",
    price: "2600",
    mrp: "5050",
    test: "105 Tests",
  },
  {
    id: "Senior Citizen Female Full Body Checkup - 2026",
    title: "Senior Citizen Female Full Body Checkup - 2026",
    description:
      "CAP, NABL, ISO 9001 CAP, NABL, ISO 9001 FREE Home Sample Pickup FREE Home Sample Pickup Online Report Delivery Online Report Delivery",
    image: "/assets/images/gallery/13.png",
    price: "2600",
    mrp: "5050",
    test: "127 Tests",
  },
];

export default function EventsSection() {
  const [search, setSearch] = useState("");

  const getWhatsappUrl = (eventTitle: string) => {
    const message = `Hello BookHealthTest, I would like to inquire about booking a ${eventTitle} health checkup.`;

    return `https://wa.me/9217039561?text=${encodeURIComponent(message)}`;
  };

  const filteredPackages = testPackages.filter((item) => {
    const value = search.toLowerCase().trim();

    if (!value) return false;

    return (
      item.name.toLowerCase().includes(value) ||
      item.description.toLowerCase().includes(value) ||
      `${item.tests}`.includes(value)
    );
  });

  const isSearching = search.trim().length > 0;

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        {/* HEADER */}
        <div className="events-header">
          <h2 className="events-title">
            Book Your Health Checkup Package Today
          </h2>

          <p className="events-intro">
            Compare our most trusted health checkup packages and choose the one that fits your needs — book instantly and take charge of your health today.
          </p>

          {/* SEARCH */}
          <div className="package-search">
            <input
              className="input-small"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search test packages..."
              aria-label="Search packages"
            />

            <button type="button">Search</button>
          </div>
        </div>

        {/* SEARCH RESULTS */}
        {isSearching && (
          <div className="package-results">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((item) => (
                <div className="package-card" key={item.id}>
                  <div className="package-card-header">
                    <h3>{item.name}</h3>
                    <span>›</span>
                  </div>

                  <div className="package-card-body">
                    <p className="package-tests">
                      <strong>{item.tests} Tests:</strong>{" "}
                      {item.description}
                    </p>

                    <div className="package-price-row">
                      <div className="package-price">
                        <strong>₹ {item.price}</strong>
                        <del>₹ {item.oldPrice}</del>
                      </div>

                      <span className="compare">
                        <input type="checkbox" />
                        Compare
                      </span>

                      <a
                        href={getWhatsappUrl(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="package-book-btn"
                      >
                        Book Now
                      </a>
                    </div>

                    <div className="package-divider" />

                    <div className="package-fasting">
                      ◉ &nbsp; Fasting Required: {item.fasting}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No test package found</h3>

                <p>
                  Try searching for Full Body, Male, Female, Senior or Basic.
                </p>
              </div>
            )}
          </div>
        )}

        {/* NORMAL HOME CARDS */}
        {!isSearching && (
          <div className="events-grid">
            {eventTypes.map((event, index) => (
              <article
                key={`${event.id}-${index}`}
                className="event-simple-card"
              >
                {/* IMAGE */}
                <div className="event-image-wrap">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-card-image"
                  />
                </div>

                {/* CONTENT */}
                <div className="event-content-wrap">
                  <h3 style={{ paddingTop: "10px" }} className="event-card-heading">
                    {event.title}
                  </h3>

                  <div className="event-price-row">
                    <div className="event-price">
                      <span className="current-price">
                        &#8377;{event.price}
                      </span>

                      <span className="old-price">
                        &#8377;{event.mrp}
                      </span>
                    </div>

                    <span className="event-tests">
                      ({event.test})
                    </span>
                  </div>

                  {/* BUTTONS */}
                  <div className="event-buttons">
                    <a
                      href={getWhatsappUrl(event.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-inquire-btn"
                    >
                      Inquire Now →
                    </a>

                    <a
                      href={getWhatsappUrl(event.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-book-btn"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}




