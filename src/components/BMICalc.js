import { useState, useEffect } from 'react';
import FormInput from './FormInput';

import PropTypes from 'prop-types';

const BMICalc = ({ getBmiValue }) => {
  const [unit, setUnit] = useState('Metric');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [count, setCount] = useState({
    prevVal: {
      heightCount: 0,
      inchesCount: 0,
      weightCount: 0,
    },
  });
  const { heightCount, inchesCount, weightCount } = count.prevVal;

  useEffect(() => {
    metricBMI(weightCount, heightCount);
    imperialBMI(weightCount, heightCount, inchesCount);
  }, [weightCount, heightCount, inchesCount]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const { prevVal } = count;
    setCount({
      prevVal: {
        ...prevVal,
        [name]: value,
      },
    });
    // second way to to change from controlled to uncontrolled component
    // setCount(prevVal=>({...prevVal,[name]:value}))
  };

  const onSelectOption = (e) => {
    setUnit(e.target.value);
    if (e.target.value === 'Metric') {
      setHeightUnit('cm');
      setWeightUnit('kg');
    } else {
      setHeightUnit('ft');
      setWeightUnit('lbs');
    }
  };

  const resetData = (e) => {
    e.preventDefault();
    getBmiValue(0);
    setUnit('Metric');
    setHeightUnit('cm');
    setWeightUnit('kg');
    setCount({
      prevVal: {
        heightCount: 0,
        inchesCount: 0,
        weightCount: 0,
      },
    });
  };

  const metricBMI = (weight, height) => {
    if (weight > 0 && height > 0) {
      const heightToMeter = height / 100;
      const bmi = (weight / (heightToMeter * heightToMeter)).toFixed(2);
      getBmiValue(bmi);
    }
  };

  const imperialBMI = (weight, height, inches) => {
    if (weight > 0 && height > 0 && inches > 0) {
      const heightToInches = height * 12 + parseInt(height);
      const bmi = (703 * (weight / Math.pow(heightToInches, 2))).toFixed(2);
      getBmiValue(bmi);
    }
  };

  return (
    <>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                name="unit"
                value={unit}
                onChange={onSelectOption}
                className="form-control form-control-sm">
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>

          <FormInput
            type="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value={heightCount}
            onChange={onInputChange}
          />
          {unit === 'Imperial' ? (
            <FormInput
              type="text"
              name="inchesCount"
              title={`Height (in)`}
              value={inchesCount}
              onChange={onInputChange}
            />
          ) : (
            ''
          )}

          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="button" onClick={resetData}>
          Reset Info
        </button>
      </div>
    </>
  );
};

BMICalc.propTypes = {
  getBmiValue: PropTypes.func.isRequired,
};

export default BMICalc;
