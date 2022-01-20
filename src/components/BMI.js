import { useState } from 'react';
import BMICalc from './BMICalc';

const BMI = () => {
  const [bmiVal, setBmiVal] = useState(0);
  return (
    <>
      <div className="calculator">
        <h3>BMI Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">Body Mass Index(BMI) = {bmiVal}</div>
            <div className="bmi-category">Underweight</div>
          </div>
        </div>
        <BMICalc getBmiValue={setBmiVal} />
      </div>
    </>
  );
};

export default BMI;
