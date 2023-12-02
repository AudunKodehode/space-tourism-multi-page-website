import TechnologyComponent from "../components/Technology/TechnologyComponent"
export default function Technology({data}){
    return (
        <>
      <section className="technology">
        <div className="headerTitle">
          <h1><span>03</span>SPACE LAUNCH 101</h1>
          </div>
        <div className="main">
            <TechnologyComponent data={data}/>
        </div>
      </section>
        </>
    )
}