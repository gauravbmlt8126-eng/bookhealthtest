"use client";

import React from "react";
import Image from "next/image";
import "./homeCollection.css";

const benefits = [
    {
        number: "01",
        title: "Convenient",
        description:
            "Get your health samples collected from the comfort of your home without visiting a diagnostic centre.",
    },
    {
        number: "02",
        title: "Trained Professionals",
        description:
            "Sample collection is handled by trained healthcare professionals with proper care and attention.",
    },
    {
        number: "03",
        title: "Safe & Hygienic",
        description:
            "Samples are collected using appropriate hygiene and safety practices for a comfortable experience.",
    },
    {
        number: "04",
        title: "Flexible Scheduling",
        description:
            "Choose a convenient date and time for your home sample collection according to your schedule.",
    },
];

const steps = [
    {
        number: "01",
        title: "Choose Your Test",
        description:
            "Select the health checkup or diagnostic test you want to book..",
    },
    {
        number: "02",
        title: "Book Collection",
        description:
            "Request a home sample collection at a convenient time.",
    },
    {
        number: "03",
        title: "Sample Collection",
        description:
            "A trained professional visits your home and collects the required sample..",
    },
    {
        number: "04",
        title: "Get Your Report",
        description:
            "Receive your test report and stay informed about your health.",
    },
];

export default function HomeCollectionPage() {
    const whatsappUrl =
        "https://wa.me/9217934616?text=" +
        encodeURIComponent(
            "Hello BookHealthTest, I would like to book a home sample collection."
        );

    return (
        <main className="home-collection-page">

            {/* ================= HERO ================= */}
            <section className="hc-hero">

                <Image
                    src="/assets/images/homeCollection/home-collection.jpg"
                    alt="Home Sample Collection"
                    fill
                    priority
                    className="hc-hero-image"
                />

                <div className="hc-hero-overlay" />

                <div className="hc-hero-container">
                    <div className="hc-hero-content">

                        <span className="hc-eyebrow">
                            04 / HOME COLLECTION
                        </span>

                        <h1> Healthcare At
                            <br />
                            Your Doorstep.
                        </h1>

                        <p>
                            Get your health samples collected safely and conveniently from the comfort of your home.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hc-button hc-button-light"
                        >
                            Book Home Collection
                            <span>→</span>
                        </a>

                    </div>
                </div>
            </section>


            {/* ================= INTRO ================= */}
            <section className="hc-intro">

                <div className="hc-container">

                    <div className="hc-intro-grid">

                        <div className="hc-intro-label">
                            <span>
                                HOME SAMPLE COLLECTION
                            </span>
                        </div>

                        <div className="hc-intro-content">

                            <h2>
                                Your Health,
                                <br />
                                Made Convenient.
                            </h2>

                            <p>
                                Skip the journey to a diagnostic centre. Our home collection service makes health testing easier by bringing sample collection directly to your doorstep.
                            </p>

                            <p>
                                Choose your preferred test, schedule a convenient time, and have your sample collected safely by a trained professional at home.
                            </p>

                            <div className="hc-intro-actions">

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hc-button hc-button-dark"
                                >
                                    Book A Test
                                    <span>→</span>
                                </a>

                                <span className="hc-small-text">
                                    Convenient healthcare at home
                                </span>

                            </div>

                        </div>

                        <div className="hc-intro-image">

                            <Image
                                src="/assets/images/gallery/home-collection.jpg"
                                alt="Healthcare at home"
                                fill
                                className="hc-cover-image"
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= BENEFITS ================= */}
            <section className="hc-benefits">

                <div className="hc-container">

                    <div className="hc-section-header">

                        <span>
                            WHY HOME COLLECTION
                        </span>

                        <h2>
                            Simple. Convenient.
                            <br />
                            Reliable.
                        </h2>

                        <p>
                            Make regular health testing easier with a convenient home sample collection service.
                        </p>

                    </div>


                    <div className="hc-benefits-grid">

                        {benefits.map((item) => (
                            <div
                                key={item.number}
                                className="hc-benefit-card"
                            >

                                <span className="hc-number">
                                    {item.number}
                                </span>

                                <div className="hc-card-content">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= PROCESS ================= */}
            <section className="hc-process">

                <div className="hc-container">

                    <div className="hc-process-header">

                        <span>
                            THE PROCESS
                        </span>

                        <h2>
                            How It Works
                        </h2>

                    </div>


                    <div className="hc-process-grid">

                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="hc-step"
                            >

                                <span className="hc-step-number">
                                    {step.number}
                                </span>

                                <div className="hc-step-content">

                                    <h3>
                                        {step.title}
                                    </h3>

                                    <p>
                                        {step.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="hc-cta">

                <div className="hc-container">

                    <div className="hc-cta-content">

                        <span>
                            TAKE THE FIRST STEP
                        </span>

                        <h2>
                            Your Health.
                            <br />
                            Your Home.
                        </h2>

                        <p>
                            Make health testing easier with convenient home sample collection
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hc-button hc-button-dark"
                        >
                            Book Home Collection
                            <span>→</span>
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}





















