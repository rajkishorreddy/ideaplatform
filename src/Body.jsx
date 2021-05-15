import "./Body.scss";
import vision from "./assets/vision.png";
const Body = () => {
  return (
    <div>
      <div className="body">
        <div className="body-heading">Our Vision</div>
        <img src={vision} alt="team" className="body-img" />
        <ul className="body-list">
          <li className="body-list-item">
            Start-ups are essential for any developing nation to grow its
            economy.
          </li>
          <li className="body-list-item">
            Especially in a recession like this the only way the economy can be
            boosted is through innovation.
          </li>
          <li className="body-list-item">
            So it is a direct need for an country to encourage start-ups.
          </li>
          <li className="body-list-item">
            This not only provides employment to their youth but also provides
            revenue to the government.
          </li>
          <li className="body-list-item">
            Hence there needs to be an organized start-up industry in a country
            for efficient management of the funds given to the start-ups.
          </li>
          <li className="body-list-item">
            This idea is public-private partnered enterprise where the platform
            for discussing idea and making the idea into a reality and is
            finally provided with business solutions.
          </li>
        </ul>
        <div className="body-moto">
          Our moto is to make a place which gathers a group which transforms an
          idea into an industry
        </div>
      </div>
    </div>
  );
};
export default Body;
