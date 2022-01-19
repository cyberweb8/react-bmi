import React from 'react';

const BMICalc = () => {
  return (
    <>
      <div className="bmi-inputs">
        <div className="input-fields">
          <span className="label-unit">Unit</span>
          <div className="unit">
            <select name="unit" value="">
              <option value="Metric">Metric</option>
              <option value="Imperial">Imperial</option>
            </select>
          </div>
        </div>
        <button type="submit" className="button">
          Reset Info
        </button>
      </div>
    </>
  );
};

export default BMICalc;
