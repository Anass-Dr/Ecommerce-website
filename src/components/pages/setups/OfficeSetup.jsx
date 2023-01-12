import React from 'react';
import Header from './Header';
import Releases from './Releases';
import {
  officeSetup1,
  officeSetup2,
  officeSetup3,
  officeSetup4,
  officeSetup5,
} from '../..';
import './setups.css';

const Info = function () {
  return (
    <section id="office-setup--info" className="setup--section">
      <div className="container row">
        <div className="column">
          <h6>office furniture</h6>
          <h2>Enhance working experience</h2>
        </div>
        <div className="column">
          <hr />
          <p className="setups__p">
            Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu
            consequat ultricies accumsan, a magna morbi egestas augue proin
            sagittis, sit neque volutpat nisl elit mattis aenean eget eget
            facilisis massa duis volutpat purus diam nec at orci lacinia lectus
            id enim diam vivamus euismod nibh venenatis.
          </p>
          <a className="setups__a" href="#">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

const Figure = ({ imgSrc, setupNumber, title }) => {
  return (
    <figure className="showcase-body--grid-item">
      <img src={imgSrc} alt="setup-img" />
      <h6>office setup / {setupNumber}</h6>
      <h4>{title} office furniture set</h4>
      <p className="setups__p">
        Dolor adipiscing integer ut imperdiet purus vulputate est, purus in non
        arcu tellus sit mi amet integer egestas aliquam massa pellentesque
        rhoncus ullamcorper gravida amet, maecenas feugiat elit suspendisse.
      </p>
      <a className="setups__a" href="#">
        View Details
      </a>
    </figure>
  );
};

const ShowCase = function () {
  return (
    <section id="office-setup--showcase" className="setup--section">
      <div className="container">
        <div className="showcase-head">
          <h6>showcase</h6>
          <h2>Office furniture setups</h2>
          <hr />
        </div>
        <div className="showcase-body">
          <div className="showcase-body--main-setup">
            <img src={officeSetup1} alt="setup-img" />
            <h6>featured setup / 01</h6>
            <div className="showcase-body--main-setup__details row">
              <div className="column">
                <h3>Mason Hyper flexible office furniture set</h3>
                <hr />
              </div>
              <div className="column">
                <p className="setups__p">
                  Dolor adipiscing integer ut imperdiet purus vulputate est,
                  purus in non arcu tellus sit mi amet integer egestas aliquam
                  massa pellentesque rhoncus ullamcorper gravida amet, maecenas
                  feugiat elit suspendisse.
                </p>
                <a className="setups__a" href="#">
                  <span>View Details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="showcase-body--grid">
            <Figure
              imgSrc={officeSetup2}
              setupNumber="02"
              title="Luna fresh aura"
            />
            <Figure
              imgSrc={officeSetup3}
              setupNumber="03"
              title="Zen HyperFlow mobility"
            />
            <Figure
              imgSrc={officeSetup4}
              setupNumber="04"
              title="Jean meeting room"
            />
            <Figure
              imgSrc={officeSetup5}
              setupNumber="05"
              title="Luna fresh aura"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function OfficeSetup() {
  return (
    <div id="office-setup" className="setups">
      <Header title="Office Setups" img="/office-main-bg.jpeg" />
      <Info />
      <Releases />
      <ShowCase />
    </div>
  );
}

export default OfficeSetup;
