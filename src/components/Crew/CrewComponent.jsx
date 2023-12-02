import { useState } from "react";
export default function CrewComponent({ data }) {
  const crew = data.crew;

  const [activeTab, setActiveTab] = useState("douglas-hurley");

  function renderCrew(crew) {
    crew = crew.replace(" ", "-").toLowerCase();
    setActiveTab(crew);
  }

  function crewTab() {
    return (
      <div className="crewTabs">
        {crew.map((crew) => (
          <div
            key={crew.name}
            onClick={() => renderCrew(crew.name)}
            className={`crewTab ${crew.name.replace(" ", "-").toLowerCase()} ${
              crew.name.replace(" ", "-").toLowerCase() === activeTab
                ? "activeTab"
                : ""
            }`}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="crewContainer">
        {crew.map((crew) => (
            <div
              key={crew.name}
              className={`crewContent ${
                crew.name.replace(" ", "-").toLowerCase() !== activeTab
                  ? "inactive"
                  : ""
              } ${crew.name.replace(" ", "-").toLowerCase()}`}
            >
              <div className="crewText">
                <h2>{crew.role.toUpperCase()}</h2>
                <h1>{crew.name.toUpperCase()}</h1>
                <p>{crew.bio}</p>
                {crewTab()}
              </div>
              <div className="crewImage">
                <img src={`/src/${crew.images.webp}`} alt="" />
              </div>
            </div>
        ))}
      </div>
    </>
  );
}
