import React, { useState } from 'react';
import styled from '@emotion/styled';

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

const Form = () => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: '',
  });
  // extract state values
  const { brand, year, plan } = data;

  // read form data and insert into state
  const obtainInfo = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };
  return (
    <form>
      <Field>
        <Label>Car brand </Label>
        <Select name="brand" value={brand} onChange={obtainInfo}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
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
      <Button type="button">Quote</Button>
    </form>
  );
};

export default Form;
