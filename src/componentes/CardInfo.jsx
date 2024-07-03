import React from 'react';
import './CardInfo.css';

const CardInfo = ({ title, description, price }) => {
  return (
    <div className="card-info">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default CardInfo;
