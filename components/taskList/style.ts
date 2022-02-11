import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: var(--subtitle);
    font-weight: 400;
    margin-bottom: 2rem;
  }
  img {
    width: 15rem;
  }
`;
