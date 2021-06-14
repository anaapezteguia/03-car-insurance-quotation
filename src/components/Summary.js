import React from 'react';
import styled from '@emotion/styled';
import { capitalize } from '../helper';
import PropTypes from 'prop-types';

const SummaryWrapper = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {
  // extract data
  const { brand, year, plan } = data;
  //to show or hide component
  if (brand === '' || year === '' || plan === '') return null;
  return (
    <SummaryWrapper>
      <h2>Quotation summary</h2>
      <ul>
        <li>Car brand: {capitalize(brand)}</li>
        <li>Car year: {year}</li>
        <li>Selected plan: {capitalize(plan)}</li>
      </ul>
    </SummaryWrapper>
  );
};
Summary.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Summary;
