import React from 'react';
import { svg } from './svg';
import {
  homeSetupImg1,
  homeSetupImg2,
  homeSetupImg3,
  homeSetupImg4,
  homeSetupImg5,
  homeSetupImg6,
} from '../../';

const Figure = (props) => {
  const { img, title } = props;

  return (
    <figure className="setup-figure">
      <img src={img} alt="work-form-home-setup" />
      <h4>{title}</h4>
      <a href="#">
        <span>View Details</span>
        {svg.arrowRight}
      </a>
    </figure>
  );
};

const HomeSetups = () => {
  return (
    <section className="home-setups">
      <div className="container">
        <h6 className="home-setups--h6">Work From Home</h6>
        <div className="home-setups__flex">
          <h2>Keep inspired & motivated</h2>
          <p>
            Etiam eros at pharetra lectus ante dignissim metus, facilisi
            faucibus aliquet senectus viverra tellus cras enim, auctor proin
            volutpat, ut leo egestas faucibus sagittis
          </p>
        </div>
        <div className="home-setups__grid">
          <Figure
            img={homeSetupImg1}
            title="Claire Configurable Minimal Clean Work from Home Set"
          />
          <Figure
            img={homeSetupImg2}
            title="Jack & Joel Hyper Luxe Work Home Office Set"
          />
          <Figure
            img={homeSetupImg3}
            title="Juno Ultra Minimalism Work from Home Set with Chair"
          />
          <Figure
            img={homeSetupImg4}
            title="Clint Modern Office Furniture Set with Configurable Desk"
          />
          <Figure
            img={homeSetupImg5}
            title="Essential Work from Home Set with HyperErgo Maxx Chair"
          />
          <Figure
            img={homeSetupImg6}
            title="HyperAcitve Work from Anywhere for High Mobility Creative"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSetups;
