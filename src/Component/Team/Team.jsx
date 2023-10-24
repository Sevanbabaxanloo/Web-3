import { LuArrowDownRight } from "react-icons/lu";
import "./Team.css";
import ape1 from "../../img/ape1.avif";
import ape2 from "../../img/ape2.png";
import game from "../../img/gameb.png";

const Team = () => {
  return (
    <div className="team">
      <div className="team_container-border">
        <div className="team-container">
          <div className="team_text-container">
            <div className="team_text-cont">
              <span>
                <LuArrowDownRight className="team_text-arrow" />
              </span>
              <h1 className="team_text">MEET THE TEAM</h1>
            </div>
          </div>
          <div className="team_line">
            <h1 className="team_name">
              <span className="team_name-span">/</span>MR_HMMM
            </h1>
            <div className="team_img-cont">
              <div className="team_img-container">
                <img src={ape1} className="team_img"></img>
              </div>
              <p className="team_position">
                <span className="team_name-span">/</span>CEO & FOUNDER
              </p>
            </div>
          </div>
          <div className="team_line">
            <h1 className="team_name">
              <span className="team_name-span">/</span>ZIGGY
            </h1>
            <div className="team_img-cont">
              <div className="team_img-container">
                <img src={game} className="team_img"></img>
              </div>
              <p className="team_position">
                <span className="team_name-span">/</span>DEV & PARTNER
              </p>
            </div>
          </div>
          <div className="team_line-last">
            <h1 className="team_name">
              <span className="team_name-span">/</span>ZOOPERDOOPER
            </h1>
            <div className="team_img-cont">
              <div className="team_img-container">
                <img src={ape2} className="team_img"></img>
              </div>
              <p className="team_position">
                <span className="team_name-span">/</span>DEV & PARTNER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
