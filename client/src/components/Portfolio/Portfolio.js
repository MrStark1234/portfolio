import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Text from "../../img/text.png";
import Port from "../../img/port.png";
import News from "../../img/news.png";
import Quiz from "../../img/quiz.png";
import Cloud from "../../img/cloud.png";

import { themeContext } from "../../context";
import { useContext } from "react";
import LaunchIcon from "@mui/icons-material/Launch";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/*Heading */}

      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/*Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <div className="port"> */}
        <SwiperSlide>
          <div className="work">
            <img src={Port} alt="/" />
            <div className="layer">
              <h3>Personal Portfolio Website</h3>
              <p>
                This website showcase my skills and projects. Used React.Js for
                frontend.
              </p>
              <a href="/" target="_blank" rel="noreferrer">
                <LaunchIcon
                  className="icon"
                  fontSize="small"
                  style={{ marginTop: "2px" }}
                />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work">
            <img src={Cloud} alt="/" />
            <div className="layer">
              <h3>Cloud-Book</h3>
              <p>
                A fully functional MERN STACK website, where we create our
                personal notes on the cloud, implimented features like Login &
                Signup page for storing user credentials, So that perticular
                user can access only his own notes.
              </p>
              <a
                href="https://github.com/MrStark1234/mern-project"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon
                  className="icon"
                  fontSize="small"
                  style={{ marginTop: "2px" }}
                />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work">
            <img src={News} alt="/" />
            <div className="layer">
              <h3>News Times of India</h3>
              <p>
                Made a News Website using external API and used React.Js for
                frontend.
              </p>
              <a
                href="https://github.com/MrStark1234/news-application"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon
                  className="icon"
                  fontSize="small"
                  style={{ marginTop: "2px" }}
                />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work">
            <img src={Quiz} alt="/" />
            <div className="layer">
              <h3>Quiz-Pop</h3>
              <p>
                Made a Quiz Application using HTML, CSS & Javascript only, it is
                a group project were i worked on javascript part.
              </p>
              <a
                href="http://quiz-pop-team-project.surge.sh/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon
                  className="icon"
                  fontSize="small"
                  style={{ marginTop: "2px" }}
                />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work">
            <img src={Text} alt="/" />
            <div className="layer">
              <h3>Text-Utilizer</h3>
              <p>
                Made a website that analized text and modified it quickly like
                character count, copy text, remove extra spaces, etc.
              </p>
              <a
                href="http://text-utilizer.surge.sh/"
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon
                  className="icon"
                  fontSize="small"
                  style={{ marginTop: "2px" }}
                />
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
