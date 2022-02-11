import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    p {
      color: var(--title);
      font-size: 1.5rem;
      font-weight: 600;
    }
    .btn-close {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--black);
      font-family: Arial, Helvetica, sans-serif;
      background: none;
      border: 0;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        color: var(--blue);
      }
    }
  }

  form {
    margin-top: 1rem;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      label {
        font-size: 0.8rem;
        color: var(--subtitle);
        font-weight: 400;
      }

      input {
        padding: 1rem;
        margin: 0.8rem auto;
        border: 0.5px solid var(--subtitle);
        height: 2rem;
        width: 95%;
        border-radius: 0.5rem;
      }
    }

    .submit {
      margin: 0 auto;
      width: 95%;
      border-radius: 0.5rem;
      border: 0.5px solid var(--subtitle);
      bottom: 0;
      background: var(--blue);
      color: var(--white);
      font-weight: 700;
      height: 3rem;
    }
  }
`;
