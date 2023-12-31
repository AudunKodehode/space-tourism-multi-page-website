import { useState } from "react";

export default function DestinationComponent({ data }) {
  const destinations = data.destinations;
  const [activeTab, setActiveTab] = useState("Moon");

  function renderDestination(destination) {
    setActiveTab(destination);
  }

function destinationTabs(){
    return (
        <div className="destinationTabs">
        {destinations.map((dst) => (
          <div
            key={dst.name}
            onClick={() => renderDestination(dst.name)}
            className={`destinationTab ${
              dst.name === activeTab ? "active" : ""
            }`}
          >
            <p>{dst.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    )
}


  return (
    <>
        

      {destinations.map((dst) => (
        <div
          key={dst.name}
          className={`destinationContent  ${
            dst.name !== activeTab ? "inactive" : ""
          }`}
        >
          <div className="destinationFlex">
            <div className="destinationImg slideIn">
              <img src={`/src/${dst.images.webp}`} alt="" />
            </div>

            <div className="destinationText">
            {destinationTabs()}
              <h1>{dst.name.toUpperCase()}</h1>
              <p>{dst.description}</p>
              <div className="divider"></div>
              <div className="bottom">
                <div className="distance">
                  <h3>AVG. DISTANCE</h3>
                  <h2>{dst.distance.toUpperCase()}</h2>
                </div>
                <div className="time">
                  <h3>EST. TRAVEL TIME</h3>
                  <h2>{dst.travel.toUpperCase()}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
