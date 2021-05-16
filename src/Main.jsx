import "./Main.scss";
import Logo from "./assets/logo.svg";
import Logo1 from "./assets/logo1.svg";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <div className="header">
        <div className="header-nav">
          <div className="header-nav-logo">
            <img src={Logo1} className="header-nav-logo-img" alt="logo" />
            <img src={Logo} className="header-nav-logo-name" alt="logo" />
          </div>
          <nav className="header-nav-items">
            <Link
              style={{ textDecoration: "none" }}
              to={"/contact"}
              className="header-nav-items-1 header-nav-items-item"
            >
              Contact us
            </Link>
            <div className="header-nav-items-2 header-nav-items-item">
              Our Vision
            </div>
            <div className="header-nav-items-3 header-nav-items-item">
              Get Started
            </div>
            <Link
              to={"/login"}
              className="header-nav-items-4 header-nav-items-item"
            >
              login
            </Link>
            <Link
              to={"/signup"}
              className="header-nav-items-5 header-nav-items-item"
            >
              signup
            </Link>
          </nav>
        </div>
        <div className="header-matter">
          <div className="header-matter-1">Great minds discuss ideas,</div>
          <div className="header-matter-2">Average minds discuss events,</div>
          <div className="header-matter-3">Small minds discuss people,</div>
          <div className="header-matter-4">BE A GREAT MIND BE A CHAMPION.</div>
        </div>
        <div className="header-list">
          <div className="header-list-item header-list-item-1">
            <div className="header-list-item-no">212</div>
            <div className="header-list-item-name">ACTIVE CLIENTS</div>
          </div>
          <div className="header-list-item header-list-item-2">
            <div className="header-list-item-no">600</div>
            <div className="header-list-item-name">ACTIVE CLIENTS</div>
          </div>
          <div className="header-list-item header-list-item-3">
            <div className="header-list-item-no">524</div>
            <div className="header-list-item-name">ACTIVE CLIENTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
