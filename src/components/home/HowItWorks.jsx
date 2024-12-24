import React, { useState } from "react";
import "./howItWorks.css"; // Import your CSS styles

const HowItWorks = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("step1");

  // Data for the steps and content
  const steps = [
    {
      id: "step1",
      title: "A Friendly Conversation",
      description:
        "Step 1 is a chat in store, virtually or in your home, where we will get to know your tastes, initial ideas, and lifestyle demands.",
      image: "/1.png",
      stepNumber: "01",
    },
    {
      id: "step2",
      title: "Tahir Conversation",
      description:
        "Step 2 is a chat in store, virtually or in your home, where we will get to know your tastes, initial ideas, and lifestyle demands.",
      image: "/2.png",
      stepNumber: "02",
    },
    {
      id: "step3",
      title: "A Smooth Conversation",
      description:
        "Step 3 is a chat in store, virtually or in your home, where we will get to know your tastes, initial ideas, and lifestyle demands.",
      image: "/3.png",
      stepNumber: "03",
    },
  ];

  return (
    <div className="how-it-works">
      <h1 className="work-title">How it Works</h1>
      <div className="container">
        {/* Text Content */}
        {steps.map((step) => (
          <div
            key={step.id}
            className={`text-content ${activeTab === step.id ? "active" : ""}`}
            data-tab={step.id}
          >
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}

        {/* Steps */}
        <div className="steps">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`step-card ${activeTab === step.id ? "active" : ""}`}
              data-tab={step.id}
              onClick={() => setActiveTab(step.id)}
            >
              <img src={step.image} alt={`Step ${step.stepNumber}`} />
              <div className="step-info">
                <span>Step</span>
                <h1>{step.stepNumber}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
