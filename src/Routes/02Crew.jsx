import CrewComponent from "../components/Crew/CrewComponent"
export default function Crew({data}){
    return (
        <>
      <section className="crew">
        <div className="headerTitle">
          <h1><span>02</span>MEET YOUR CREW</h1>
          </div>
        <div className="main">
            <CrewComponent data={data}/>
        </div>
      </section>
        </>
    )
}