import React from 'react';
import GoToBtn from '../../common/GoToBtn';
import { homeCollection, officeCollection } from '../../';
import Overlay from '../../common/Overlay';

const Collection = (props) => {
  const { number, title, imgSrc, imgAlt } = props;

  return (
    <div className="collection">
      <img src={imgSrc} alt={imgAlt} />
      <Overlay backgroundColor="var(--primary-color)" opacity=".24" />
      <div className="container">
        <div className="collection-body">
          <h6>Featured collection / {number}</h6>
          <div>
            <h2>{title}</h2>
            <GoToBtn str="Shop Collection" style="btn-outline" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  return (
    <section className="collections">
      <Collection
        imgSrc={homeCollection}
        imgAlt="home-fourniture"
        number="01"
        title="Neo Futura Office Furniture"
      />
      <Collection
        imgSrc={officeCollection}
        imgAlt="office-fourniture"
        number="02"
        title="Rustic Home Office Furniture Set"
      />
    </section>
  );
};

export default Collections;
