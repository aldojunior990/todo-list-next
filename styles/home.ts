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
      .newTask {
        width: 50%;
        form {
          width: 100%;
          display: flex;
          input:first-child {
            width: 60%;
            border: 0;
            border-radius: 0.5rem 0rem 0rem 0.5rem;
            padding: 0.5rem;
            height: 3rem;
            font-size: 0.8rem;
            font-weight: 400;
          }

          input:last-child {
            width: 40%;
            height: 3rem;
            border-radius: 0rem 0.5rem 0.5rem 0rem;
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
      }
    }

    h2 {
      font-weight: 700;
      font-size: 2.5rem;
      color: var(--title);
    }
  }

  @media (max-width: 768px) {
    .content {
      .header {
        display: grid;
        grid-template-columns: 1fr;
        .newTask {
          margin-top: 1rem;
          width: 100%;
        }
      }
      .footer {
        display: flex;
      }
    }
  }
`;
