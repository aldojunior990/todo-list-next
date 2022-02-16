import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
  
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    p {
      color: var(--subtitle);
      font-weight: 400;
    }
    img {
      margin-top: 1rem;
      width: 15rem;
      margin: auto;
    }
  }

  .Task {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    width: 100%;
    border-radius: 0.5rem;
    background: var(--components);
    border: 0.01px solid var(--subtitle);
    .content {
      margin: 0;
      width: 98%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .info {
        display: flex;
        flex-direction: column;
        justify-content:  center;
        height: 90%;
        .taskTitle {
          font-size: 1rem;
          font-weight: 600;
          color: var(--title);
        }
        .taskDate {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--subtitle);
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 1.5rem;
          height: 1.5rem;
          border: 0;
          border-radius: 1rem;
          cursor: pointer;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 0.7rem;
          background: none;
          border: 0;
          cursor: pointer;

          .icon {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--subtitle);
            transition: 0.5s;
          }
          &:hover {
            .icon {
              color: red;
            }
          }
        }
      }
    }
  }
`;
