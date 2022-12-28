import React from 'react';
import Header from './Header';
import Releases from './Releases';
import CustomSetup from '../../common/CustomSetup';
import Footer from '../../common/Footer';
import {
  homeSetupDesc,
  homeSetup1,
  homeSetup2,
  homeSetup3,
  homeSetup4,
  homeSetup5,
} from '../../';
import './setups.css';

const Description = function () {
  return (
    <section id="home-setup--desc">
      <div className="container row">
        <div className="col">
          <h6>work from home</h6>
          <h2>Smooth workflow at home with your own working space</h2>
          <hr />
          <p className="setups__p">
            Et arcu eu ultricies pharetra, malesuada congue egestas venenatis
            pellentesque vitae massa aliquet quis velit elementum.
            <br />
            <br />
            Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu
            consequat ultricies accumsan, a magna morbi egestas augue proin
            sagittis, sit neque volutpat nisl elit mattis aenean eget eget
            facilisis massa duis volutpat purus diam nec at orci lacinia lectus
            id enim diam vivamus euismod nibh venenatis.
          </p>
          <a className="setups__a" href="#">
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
            </svg>
          </a>
        </div>
        <div className="col">
          <img src={homeSetupDesc} alt="setup-img" />
        </div>
      </div>
    </section>
  );
};

const FirstProduct = function () {
  return (
    <section id="home-setup--first-product">
      <div className="container">
        <img src={homeSetup1} alt="setup-img" />
        <h6>featured setup / 01</h6>
        <div className="row">
          <div className="col">
            <h3>Jordan HyperErgo setup with adjustable standing desk</h3>
            <hr />
          </div>
          <div className="col">
            <p className="setups__p">
              Dolor adipiscing integer ut imperdiet purus vulputate est, purus
              in non arcu tellus sit mi amet integer egestas aliquam massa
              pellentesque rhoncus ullamcorper gravida amet, maecenas feugiat
              elit suspendisse.
            </p>
            <a className="setups__a" href="#">
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Product = ({ setupNumber, title, img }) => {
  return (
    <figure className="row">
      <div className="col">
        <img src={img} alt="setups-img" />
      </div>
      <div className="col">
        <h6>wfh setup / {setupNumber}</h6>
        <h4>{title}</h4>
        <p className="setups__p">
          Purus in non arcu tellus mi amet integer egestas aliquam massa
          pellentesque ullamcorper gravida amet, maecenas feugiat elit.
        </p>
        <a className="setups__a" href="#">
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
          </svg>
        </a>
      </div>
    </figure>
  );
};

const Products = function () {
  return (
    <section id="home-setup--products" className="setup--section">
      <div className="container">
        <Product
          img={homeSetup2}
          setupNumber="02"
          title="HyperStudio essential work from home setup"
        />
        <Product
          img={homeSetup3}
          setupNumber="03"
          title="HyperMotion editor with dual screen monitor setup"
        />
        <Product
          img={homeSetup4}
          setupNumber="04"
          title="HyperMove working setup for high mobility"
        />
        <Product
          img={homeSetup5}
          setupNumber="05"
          title="Joanna modern work from home furniture setup"
        />
      </div>
    </section>
  );
};

function HomeSetup() {
  return (
    <div className="setups">
      <Header
        title="Work from Home Setups"
        img="/src/assets/images/home-setup-main.jpeg"
      />
      <Description />
      <FirstProduct />
      <Releases />
      <Products />
      <CustomSetup />
      <Footer />
    </div>
  );
}

export default HomeSetup;
