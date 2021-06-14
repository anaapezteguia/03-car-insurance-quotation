import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

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

  // spinner
  const [loader, setLoader] = useState(false);

  // extract data
  const { quotation, data } = summary;

  return (
    <Wrapper>
      <Header title="Car insurance quotation" />
      <FormWrapper>
        <Form setSummary={setSummary} setLoader={setLoader} />
        {loader ? <Spinner /> : null}
        <Summary data={data} />
        {!loader ? <Result quotation={quotation} /> : null}
      </FormWrapper>
    </Wrapper>
  );
}

export default App;
