import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
  padding: 0.5rem 0;
  background-color: #0079BF;
  @media (min-width: 400px) {
    padding: 1rem 0;
  }
`;

export const Main = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};