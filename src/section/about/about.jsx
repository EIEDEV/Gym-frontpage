import AboutImage from "../../assets/images (3).jpeg";
import "./about.css";
import { BiSolidLogIn } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <img src={AboutImage} />
        <div className="about__text">
          <div className="about__header">
            <div className="about__color"></div>
            <h3>FIGHT LIKE YOU</h3>
            <h3>RULE THE WORLD</h3>
          </div>
          <p>
            "I WIELD SUPREME AUTHORITY OVER THE WORLD, WHERE THE ELEMENTS
            THEMSELVES BEND TO MY WILL. THE OCEAN CHURN AND THE MOUNTAINS QUAKE,
            ALL ACKNOWLEDGING MY SOVERIGN RULE."
          </p>
          <button className="btn">
            SIGN UP <BiSolidLogIn />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
