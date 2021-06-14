import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const QuotationResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const QuotationText = styled.p`
  color: #00838f;
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const Result = ({ quotation }) => {
  return quotation === 0 ? (
    <Message>Choose brand, year and type of insurance plan</Message>
  ) : (
    <QuotationResult>
      <QuotationText>El total es: {quotation} $</QuotationText>
    </QuotationResult>
  );
};
export default Result;
