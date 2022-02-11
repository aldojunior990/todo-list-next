import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  p {
    margin-top: 4rem;
    color: var(--subtitle);
    font-weight: 400;
    margin-bottom: 2rem;
  }
  img {
    width: 15rem;
  }

  ul {
    margin: 1rem auto;

    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    li {
      width: 90%;
      height: 5rem;
      border: 0.5px solid var(--subtitle);
      background: var(--components);
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0.5rem;
      .title {
        font-size: 1rem;
        font-weight: 700;
      }
      .subtitle {
        font-size: 1rem;
        font-weight: 600;
      }
      .description {
        font-size: 1rem;
        font-weight: 600;
      }
      & + li {
        margin-top: 1rem;
      }
    }
  }
`;
