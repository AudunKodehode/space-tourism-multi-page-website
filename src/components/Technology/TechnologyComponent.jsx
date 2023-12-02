import { useState } from "react";
export default function TechnologyComponent({ data }) {
  const tech = data.technology;
  const [activeTab, setActiveTab] = useState("launch-vehicle");

  function renderTech(tech) {
    tech = tech.replace(" ", "-").toLowerCase();
    console.log(tech);
    setActiveTab(tech);
  }

  function techTabs() {
    return (
      <div className="techTabs">
        {tech.map((tech, index) => (
          <div
            key={tech.name}
            onClick={() => renderTech(tech.name)}
            className={`techTab ${tech.name.replace(" ", "-").toLowerCase()} ${
              tech.name.replace(" ", "-").toLowerCase() === activeTab
                ? "activeTab"
                : ""
            }`}
          >
            <h1>{index + 1}</h1>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="techContainer">
        
        {tech.map((tech) => (
          <div
            key={tech.name}
            className={`techContent ${
              tech.name.replace(" ", "-").toLowerCase() !== activeTab
                ? "inactive"
                : ""
            } ${tech.name.replace(" ", "-").toLowerCase()}`}
          >
            <div className="techContainer">

            {techTabs()}
            <div className="techText">
                <h2>THE THERMINOLOGY...</h2>
              <h1>{tech.name.toUpperCase()}</h1>
              <p>{tech.description}</p>
            </div>

            </div>
            <div className="techImage">
              <img src={`/src/${tech.images.portrait}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
