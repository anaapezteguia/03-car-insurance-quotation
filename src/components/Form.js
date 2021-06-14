import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtainYearDifference, obtainBrand, obtainPlan } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none; //removes 'normal' appearance of select
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setSummary, setLoader }) => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: '',
  });
  const [error, setError] = useState(false);

  // extract state values
  const { brand, year, plan } = data;

  // read form data and insert into state
  const obtainInfo = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  // when user presses submit
  const handleQuotation = (ev) => {
    ev.preventDefault();
    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    //   start with a 2000$ base
    let result = 2000;

    // obtain years difference
    const difference = obtainYearDifference(year);
    // subtract 3% value each year
    result -= (difference * 3 * result) / 100;
    //   american ->increases 15%
    //   asian ->increases 5%
    //   european ->increases 30%
    result = obtainBrand(brand) * result;

    //   Basic plan increases 20%
    //   Complete plan increases 50%
    const planIncrease = obtainPlan(plan);
    result = parseFloat(planIncrease * result).toFixed(2); //just 2 digits floating

    // Total with loader
    setLoader(true);
    setTimeout(() => {
      // removes spinner
      setLoader(false);
      // passes info to main component
      setSummary({
        quotation: result,
        data,
      });
    }, 3000);
  };
  return (
    <form onSubmit={handleQuotation}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Car brand </Label>
        <Select name="brand" value={brand} onChange={obtainInfo}>
          <option value="">-- Select --</option>
          <option value="american">american</option>
          <option value="european">european</option>
          <option value="asian">asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Car year </Label>
        <Select name="year" value={year} onChange={obtainInfo}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan </Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === 'basic'}
          onChange={obtainInfo}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === 'complete'}
          onChange={obtainInfo}
        />
        Complete
      </Field>
      <Button type="submit">Quote</Button>
    </form>
  );
};

export default Form;
