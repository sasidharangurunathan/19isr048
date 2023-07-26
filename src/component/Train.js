
import React from 'react';
import './card.css';

const trainsData = [
  {
    trainName: 'Chennai Exp',
    trainNumber: '2344',
    departureTime: {
      Hours: 21,
      Minutes: 35,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 3,
      AC: 1,
    },
    price: {
      sleeper: 2,
      AC: 5,
    },
    delayedBy: 15,
  },
  {
    trainName: 'Hyderabad Exp',
    trainNumber: '2341',
    departureTime: {
      Hours: 23,
      Minutes: 55,
      Seconds: 0,
    },
    seatsAvailable: {
      sleeper: 6,
      AC: 7,
    },
    price: {
      sleeper: 554,
      AC: 1854,
    },
    delayedBy: 5,
  },
];

{/* <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div> */}

const Train = () => {
  return (
    <div className="card">
      {trainsData.map((train, index) => (
        
        
        <div className="card-content" key={index}>
          <h3 className="card-title">{train.trainName}</h3>
          <p className="card-description">Train Number: {train.trainNumber}</p>
          <p className="card-description">Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
          <p className="card-description">Seats Available - Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</p>
          <p className="card-description">Price - Sleeper: {train.price.sleeper}, AC: {train.price.AC}</p>
          <p className="card-description">Delayed By: {train.delayedBy} minutes</p>
          <li><Link to="/register">Register</Link></li>
        </div>
      ))}
    </div>
  );
};

export default Train;
