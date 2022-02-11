import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    margin-top: 4rem;
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        width: 10rem;
        height: 3rem;
        border-radius: 0.5rem;
        border: 0;
        background: var(--blue);
        color: var(--white);
        font-weight: 600;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
    .footer {
      position: fixed;
      bottom: 2rem;
      width: 80%;
      display: none;
      align-items: center;
      justify-content: flex-end;
      button {
        width: 4rem;
        height: 3rem;
        border: 0;
        color: var(--white);
        background: var(--blue);
        border-radius: 0.5rem;
      }
    }
    h2 {
      font-weight: 700;
      font-size: 2.5rem;
      color: var(--title);
    }
  }

  @media (max-width: 425px) {
    .content {
      .header {
        button {
          display: none;
        }
      }
      .footer {
        display: flex;
      }
    }
  }
`;
