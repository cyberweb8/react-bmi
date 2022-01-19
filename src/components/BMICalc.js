import React from 'react';
import FormInput from './FormInput';

const BMICalc = () => {
  const onInputChange = (e) => {};
  return (
    <>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select name="unit" value="">
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>

          <FormInput
            type="text"
            name="heightCount"
            title={`Height (cm)`}
            value=""
            onChange={onInputChange}
          />

          <FormInput
            type="text"
            name="inchesCount"
            title={`Height (in)`}
            value=""
            onChange={onInputChange}
          />

          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (kg)`}
            value=""
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="button">
          Reset Info
        </button>
      </div>
    </>
  );
};

export default BMICalc;
