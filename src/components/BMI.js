import { useState } from 'react';
import BMICalc from './BMICalc';

const BMI = () => {
  const [bmiVal, setBmiVal] = useState(0);

  const getBmiClass = (bmi) => {
    if (bmi > 1 && bmi < 18.5) return 'Underweight';
    if (bmi > 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi > 24.9 && bmi < 29.9) return 'Overweight';
    if (bmi > 30) return 'Obese';
  };
  const bmiCategory = getBmiClass(bmiVal);
  let bmiClass = '';
  if (bmiVal > 0 && bmiCategory) {
    bmiClass = bmiCategory.split(' ')[0].toLowerCase();
  }

  const getBmiBackground = (bmi) => {
    if (bmi > 1 && bmi < 18.5) return '#fed88b';
    if (bmi > 18.5 && bmi < 24.9) return '#80ff80';
    if (bmi > 24.9 && bmi < 29.9) return '#ff7f50';
    if (bmi > 30) return '#ff5411';
  };

  return (
    <>
      <div className="calculator" style={{ backgroundColor: getBmiBackground(bmiVal) }}>
        <h3>BMI Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">Body Mass Index(BMI) = {bmiVal}</div>
            <div className={`bmi-category ${bmiClass}`}>{bmiCategory}</div>
          </div>
        </div>
        <BMICalc getBmiValue={setBmiVal} />
      </div>
    </>
  );
};

export default BMI;
