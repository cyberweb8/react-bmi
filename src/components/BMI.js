import React from 'react';
import BMICalc from './BMICalc';

const BMI = () => {
  return (
    <>
      <div className="calculator">
        <h3>BMI Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">Body Mass Index(BMI) = 23</div>
            <div className="bmi-category">Underweight</div>
          </div>
        </div>
        <BMICalc />
      </div>
    </>
  );
};

export default BMI;
