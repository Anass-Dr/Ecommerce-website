import React from 'react';
import { featuresChair, featuresCabinets, featuresLamp } from '../../';

const Features = () => {
  const FeatureProduct = (props) => {
    const { img, alt, name } = props;

    return (
      <div>
        <a href="#">
          <img src={img} alt={alt} />
        </a>
        <a className="features-body__link" href="#">
          {name}
        </a>
      </div>
    );
  };

  return (
    <section className="features">
      <div className="features-head">
        <h2>Featured collection</h2>
        <p>
          Duis enim fermentum id et molestie arcu sagittis, sapien turpis
          praesent consectetur dolor lobortis posuere adipiscing
        </p>
      </div>
      <div className="features-body">
        <FeatureProduct img={featuresChair} alt="chair-img" name="Chairs" />
        <FeatureProduct
          img={featuresCabinets}
          alt="cabinets-img"
          name="Cabinets"
        />
        <FeatureProduct img={featuresLamp} alt="lamp-img" name="Lamp" />
      </div>
    </section>
  );
};

export default Features;
