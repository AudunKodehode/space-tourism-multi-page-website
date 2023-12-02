import DestinationComponent from "../components/Destination/Destinationcomponent";
export default function Destination({ data }) {
  return (
    <>
      <section className="destination">
        <div className="headerTitle">
          <h1><span>01</span>PICK YOUR DESTINATION</h1>
          </div>
        <div className="main">
          <DestinationComponent data={data} />
        </div>
      </section>
    </>
  );
}
