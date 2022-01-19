import { useState, useEffect } from 'react';
import FormInput from './FormInput';

const BMICalc = () => {
  const [unit, setUnit] = useState('');
  const [heightUnit, setHeightUnit] = useState('');
  const [weightUnit, setWeightUnit] = useState('');

  useEffect(() => {
    if (unit === '') {
      setUnit('Metric');
      setHeightUnit('cm');
      setWeightUnit('kg');
    }
  }, [unit]);
  const onInputChange = (e) => {};

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
            value=""
            onChange={onInputChange}
          />
          {unit === 'Imperial' ? (
            <FormInput
              type="text"
              name="inchesCount"
              title={`Height (in)`}
              value=""
              onChange={onInputChange}
            />
          ) : (
            ''
          )}

          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
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
