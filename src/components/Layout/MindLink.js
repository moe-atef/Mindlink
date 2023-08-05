import { Link } from "react-router-dom";

import "./MindLink.css";

const MindLink = () => {
  return (
    <div className="container">
      <div className="row mt-4 justify-content-between">
        <div className="py-2 tool-container rounded-pill d-flex align-items-center">
          <Link to="/">
            <div className=" m-0">
              <i className="fas fa-angle-left p-2 me-2 back-btn"></i>
              <span className="me-1">Mind Mapping</span>
            </div>
          </Link>
        </div>

        <div className=" py-2 tool-container rounded-pill d-flex align-items-center">
          <div className=" m-0">
            <i className="fas fa-search me-3 ms-1 "></i>
            <i className="fas fa-grip-lines-vertical me-3 ms-1"></i>
            <i className="fas fa-reply me-3 ms-1 "></i>
            <i className="fas fa-share me-4 ms-1 "></i>

            <Link to="/signup">
              <button className="sign-btn me-1">Sign up to save</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mind-mapping"></div>
      <div className="bottom-controllers d-flex justify-content-center">
        <div className="p-3 tool-container rounded-pill d-flex align-items-center">
          <div>
            <i className="fas fa-minus p-2 mx-1 back-btn"></i>
            <span>100 %</span>
            <i className="fas fa-plus p-2 mx-2 back-btn"></i>
            <i className="fas fa-brush ms-4 p-2 mx-2 back-btn"></i>
            <i className="fas fa-edit p-2 mx-2 back-btn"></i>
            <i className="fas fa-paperclip p-2 mx-2 back-btn"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindLink;
