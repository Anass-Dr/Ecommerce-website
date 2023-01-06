import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <Logo type="dark" />
      <div>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
    </div>
  );
};

const ListItem = (props) => {
  const { title, path = '#' } = props;

  return (
    <li className="footer-links__list-item">
      <Link to={path} state={{ type: 'category', query: title }}>
        {title}
      </Link>
    </li>
  );
};

const List = ({ head, children }) => {
  return (
    <div className="footer-links__list">
      <p>{head}</p>
      <ul>{children}</ul>
    </div>
  );
};

const CopyRights = () => {
  return (
    <div className="footer-copy">
      <p>Copyright © 2022 Office Furniture Store</p>
    </div>
  );
};

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <SocialLinks />
          <List head="About Us">
            <ListItem title="About Us" />
            <ListItem title="Contact Us" />
            <ListItem title="Careers" />
            <ListItem title="Customer Support" />
          </List>
          <List head="Categories">
            <ListItem title="Table" path="/shop" />
            <ListItem title="Chairs" path="/shop" />
            <ListItem title="Cabinets" path="/shop" />
            <ListItem title="Desk Plants" path="/shop" />
          </List>
          <List head="Information">
            <ListItem title="FAQs" />
            <ListItem title="Refund Policy" />
            <ListItem title="Privacy Policy" />
            <ListItem title="Terms & Conditions" />
          </List>
        </div>
        <CopyRights />
      </div>
    </footer>
  );
}

export default Footer;
