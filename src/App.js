import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: '',
    },
  });

  // extract data
  const { data } = summary;

  return (
    <Wrapper>
      <Header title="Car insurance quotation" />
      <FormWrapper>
        <Form setSummary={setSummary} />
        <Summary data={data} />
      </FormWrapper>
    </Wrapper>
  );
}

export default App;
