import { Link } from "react-router-dom";
import mainImg from "../../assets/main img.png";
import "./Home.css";
import Logo from "./Logo";

const Home = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <Logo />
        <div className="signup-button-container d-flex justify-content-center align-items-center">
          <Link to="/signup">
            <div className="signup-button-text">Sign up</div>
          </Link>
          <Link to="/mindlink">
            <button className="button m-0">Create Your Map</button>
          </Link>
        </div>
      </div>
      <div className="content-container">
        <div className="text-container">
          <div className="title">
            Connect Your Ideas,
            <br /> See the Bigger Picture!
          </div>
          <div className="description">
            Give ideas structure, share them across teams. The quickest,
            <br /> easiest way for teams to capture, organize, and map out their ideas.
          </div>
        </div>

        <Link to="mindlink">
          <button className="button">Create Your Map</button>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          className="main-image"
          src={mainImg}
          alt="Main Image"
        />
      </div>
    </div>
  );
};

export default Home;
