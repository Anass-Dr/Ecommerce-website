import React from 'react';

const InfoItem = (props) => {
  const { style, head } = props;

  return (
    <div className="info-item">
      <i className={style}></i>
      <div>
        <p className="info-item__head">{head}</p>
        <p className="info-item__p">Lorem ipsum amet consectetur</p>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <InfoItem style="fa-solid fa-truck" head="Free Shipping" />
        <InfoItem style="fa-regular fa-clock" head="Support 24/7" />
        <InfoItem style="fa-solid fa-money-bill-wave" head="Money return" />
        <InfoItem style="fa-solid fa-gift" head="Member discount" />
      </div>
    </section>
  );
};

export default Info;
