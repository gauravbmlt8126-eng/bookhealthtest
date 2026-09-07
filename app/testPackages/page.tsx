import React from "react";
import "./testPackages.css";
import { testPackages } from "@/features/data/testPackages";

const getWhatsappUrl = (packageName: string) => {
    const message = `Hello BookHealthTest, I would like to inquire about booking ${packageName}.`;

    return `https://wa.me/9217039561?text=${encodeURIComponent(message)}`;
};

const Page = () => {
    return (
        <main className="test-packages-page">
            <div className="test-packages-container">

                <div className="test-packages-header">
                    <h1>Test Packages</h1>

                    <p>
                        Choose the right health checkup package for your needs.
                    </p>
                </div>

                <div className="test-packages-grid">

                    {testPackages.map((item) => (
                        <div
                            className="package-card"
                            key={item.id}
                        >

                            <div className="package-card-header">
                                <h3>{item.name}</h3>
                                <span>›</span>
                            </div>

                            <div className="package-card-body">

                                <p className="package-tests">
                                    <strong>
                                        {item.tests} Tests:
                                    </strong>{" "}
                                    {item.description}
                                </p>

                                <div className="package-price-row">

                                    <div>
                                        <strong>
                                            ₹ {item.price}
                                        </strong>

                                        <del>
                                            ₹ {item.oldPrice}
                                        </del>
                                    </div>

                                    <label className="compare">
                                        <input type="checkbox" />
                                        Compare
                                    </label>

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
                                    ◉ &nbsp; Fasting Required:{" "}
                                    {item.fasting}
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </main>
    );
};

export default Page;