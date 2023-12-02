import DestinationComponent from "../components/Destination/Destinationcomponent";
export default function Destination({ data }) {
  return (
    <>
      <section className="destination">
        <div className="main">
          <DestinationComponent data={data} />
        </div>
      </section>
    </>
  );
}
