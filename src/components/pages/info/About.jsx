import React, { useState, useRef } from 'react';
import Header from './Header';
import video from '../../../assets/videos/video.mp4';
import videoPoster from '../../../assets/images/about-video-poster.jpeg';
import {
  aboutProfile,
  aboutCollection1,
  aboutCollection2,
  aboutCollection3,
  aboutCollection4,
  aboutCollection5,
  aboutCollection6,
} from '../..';
import './About.css';

const Story = function () {
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef();

  const handleClick = () => {
    setIsActive(true);
    videoRef.current.play();
  };

  return (
    <section id="about-story">
      <div className="container">
        <h6>our story</h6>
        <div className="row">
          <div className="col">
            <h2>The fascination of workspace furniture</h2>
            <hr />
          </div>
          <div className="col">
            <p>
              Blandit massa, eleifend eget morbi morbi in eleifend gravida in id
              lorem erat donec ipsum nunc est et arcu dolor ut enim mi eu
              tempus, maecenas pharetra eget pretium ultrices mollis facilisi.
              <br />
              <br />
              Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa
              eu consequat ultricies accumsan, a magna morbi egestas augue proin
              sagittis, sit neque volutpat nisl elit mattis aenean eget eget
              facilisis massa duis volutpat purus diam nec at orci lacinia
              lectus id enim diam vivamus euismod nibh venenatis.
            </p>
          </div>
        </div>
        <div id="story-video" onClick={handleClick}>
          <img
            className={isActive ? 'hidden' : ''}
            src={videoPoster}
            alt="video-poster"
          />
          {!isActive && (
            <div id="playIcon">
              <i className="fa-solid fa-play"></i>
            </div>
          )}
          <video
            ref={videoRef}
            src={video}
            controls
            width="100%"
            height="675px"
          />
        </div>
        <div id="story-features">
          <div>
            <i className="fa-solid fa-pen-ruler"></i>
            <h5>Perfect Precision</h5>
            <p>
              Egestas at faucibus neque leo ac quisque ligula ultricies euismod
              platea mauris.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-maximize"></i>
            <h5>Customizable</h5>
            <p>
              Cras congue consequat varius sit natoque ultrices nascetur diam ut
              nisl congue.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
            <h5>Affordable</h5>
            <p>
              Praesent mauris elit sed quis arcu, leo aliquet quis dignissim
              odio eget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feedback = function () {
  return (
    <div id="about-feedback">
      <div className="container">
        <i className="fa-solid fa-quote-left"></i>
        <h4>
          Hendrerit ac in aliquet sed etiam interdum ultricies pellentesque
          egestas convallis etiam elementum enim nisl cursus sit fames malesuada
          morbi arcu.
        </h4>
        <div className="profile">
          <img src={aboutProfile} alt="profile-picture" />
          <div>
            <p>Victor Sullivan</p>
            <span>Founder, CEO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collection = function () {
  return (
    <div id="about-collection">
      <div className="container">
        <img src={aboutCollection1} alt="setup-img" />
        <img src={aboutCollection2} alt="setup-img" />
        <img src={aboutCollection3} alt="setup-img" />
        <img src={aboutCollection4} alt="setup-img" />
        <img src={aboutCollection5} alt="setup-img" />
        <img src={aboutCollection6} alt="setup-img" />
      </div>
    </div>
  );
};

function About() {
  return (
    <div id="about-page">
      <Header title="About Us" imgSrc="url('/about-main.jpeg')" />
      <Story />
      <Feedback />
      <Collection />
    </div>
  );
}

export default About;
