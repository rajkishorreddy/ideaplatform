import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Link
        style={{ textDecoration: "none" }}
        to={"/contact"}
        className="footer-name"
      >
        still confused ? contact us &rarr;
      </Link>
    </div>
  );
};
export default Footer;
