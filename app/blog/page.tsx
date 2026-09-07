"use client";

import React from "react";
import Image from "next/image";
import "./blog.css";
import { blogPosts } from "@/features/data/blog";

export default function EventsSection() {
    return (
        <section id="events" className="events-section">
            <div className="events-container">

                {/* Section Header */}
                <div className="events-header">
                    <h2 className="events-title">
                        Health & Wellness Blog
                    </h2>

                    <p className="events-intro">
                        Discover helpful health tips, preventive care advice, and expert insights to help you stay informed and take better care of your health.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="events-grid">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="event-simple-card"
                        >
                            {/* Image */}
                            {/* <div className="event-image-wrap">
                                <Image
                                    src={post.image}
                                    alt="imges blog"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </div> */}

                            {/* <div className="event-image-wrap">
                                <Image
                                    src={post.image}
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
                            </div> */}

                            <div className="event-image-wrap">
                                <Image
                                    src={post.image}
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

                            {/* Content */}
                            {/* <div className="event-content-wrap">

                                <span className="event-subtitle">
                                    {post.subtitle}
                                </span>

                                <h3 className="event-card-heading">
                                    {post.title}
                                </h3>

                                <p className="event-card-desc">
                                    {post.description}
                                </p>

                                <div style={{ marginTop: "1rem" }}>
                                    <span
                                        className="event-read-more"
                                        style={{
                                            display: "inline-block",
                                            fontSize: "0.8rem",
                                            fontWeight: "600",
                                            color:
                                                "var(--primary-gold-dark, #a88e68)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.1em",
                                            borderBottom:
                                                "1px solid var(--primary-gold, #c8ae86)",
                                            paddingBottom: "2px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Read More &rarr;
                                    </span>
                                </div>

                            </div> */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}