import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import { CenteredLoading } from "./ui/CenteredLoading";
import Graph from "./components/Graph";
import { GlobalStyles } from "./ui/GlobalStyles";
import Form from "./components/Form";
import { Title } from "./ui/Typography";

const GraphContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const FormWrapper = styled.div`
  width: 20vw;
`;
const App: React.FC = () => {
  return (
    <Suspense fallback={<CenteredLoading />}>
      <AppWrapper>
        <Title>Corona Dashboard</Title>
        <GraphContainer>
          <Graph />
          <FormWrapper>
            <Form />
          </FormWrapper>
        </GraphContainer>
      </AppWrapper>
    </Suspense>
  );
};

const Root = () => (
  <RecoilRoot>
    <App />
    <GlobalStyles />
  </RecoilRoot>
);
export default Root;
