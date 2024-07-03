import React from 'react';
import MilkShakeCard from './MilkShakeCard';
import './MilkShakeSection.css';

const MilkShakeSection = () => {
  const milkshakes = [
    {
      id: 1,
      title: "Crunchy Butterscotch",
      description: "Butterscotch & Cashews",
      price: "Bs 18",
    },
    {
      id: 2,
      title: "Supermans Secret",
      description: "Peanut Butter . Dry fruit . With Vanilla Ice Cream",
      price: "Bs 21",
    },
    {
      id: 3,
      title: "Wonder Woman Shake",
      description: "Saffron . With Vanilla Ice Cream",
      price: "Bs 19",
    },
  ];

  return (
    <section className="milkshake-section">
      <h2>Milk Shakes</h2>
      {milkshakes.map((milkshake) => (
        <MilkShakeCard key={milkshake.id} milkshake={milkshake} />
      ))}
    </section>
  );
};

export default MilkShakeSection;
