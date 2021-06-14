import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

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
  // nodeRef is a ref object that should point to the transitioning child
  // this avoids warnings because of the react strict mode
  const nodeRef = React.useRef(null);

  return quotation === 0 ? (
    <Message>Choose brand, year and type of insurance plan</Message>
  ) : (
    <QuotationResult>
      <TransitionGroup component="div" className="resultado">
        <CSSTransition
          nodeRef={nodeRef} // nodeRef
          classNames="resultado"
          key={quotation}
          timeout={{ enter: 500, exit: 500 }}
        >
          <QuotationText ref={nodeRef}>
            {' '}
            {/* nodeRef */}
            The total amount is: {quotation} $
          </QuotationText>
        </CSSTransition>
      </TransitionGroup>
    </QuotationResult>
  );
};
Result.propTypes = {
  quotation: PropTypes.number.isRequired,
};

export default Result;
