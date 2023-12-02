import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="home">
      <img src="src/assets/technology/image-launch-vehicle-portrait.jpg" alt="" />
        <div className="main">
          <div className="main-l">
            <h2>So, you want to travel to </h2>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="main-r">
          <Link to="/destination">
            <div className="circle">
                <h3>
              Explore
              </h3>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
