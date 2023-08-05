import { Link } from "react-router-dom";
import GoogleLogo from "../../assets/Google__G__Logo.png";
import "./Login.css";
import Logo from "./Logo";

const Login = () => {
  return (
    <div className="container">
      <nav className="mt-4 d-flex justify-content-between align-items-center">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/signup">
          {" "}
          <button className="btn btn-prim px-4 rounded-pill">Sign up</button>
        </Link>
      </nav>
      <div className="d-flex justify-content-center mt-5">
        <section className=" d-flex flex-column align-items-center ">
          <p className="h2 mx-5 text-weight-bold">Log in to your Account</p>
          <button className="btn btn-google mt-4">
            <img src={GoogleLogo}></img>Log in with Google
          </button>
          <div className="line mt-4 text-center col-12 row justify-content-center align-items-center">
            <hr className="col-5" />
            <p className="col-1">or</p>
            <hr className="col-5" />
          </div>

          <label className="label1 mb-1">Email</label>
          <input
            type="email"
            className="text-box mb-1"></input>
          <label className="label1 mb-1">Password</label>
          <input
            type="password"
            className="text-box mb-1"></input>
          <button className="btn btn-sign mt-4">Log in</button>
        </section>
      </div>
    </div>
  );
};

export default Login;
