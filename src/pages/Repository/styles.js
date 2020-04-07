import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const ButtonState = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  justify-content: center;

  button {
    background-color: #fff;
    border: 1px solid;
    border-color: #7159c1;
    border-radius: 4px;
    color: #7159c1;
    padding: 8px 26px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #7159c1;
      color: #eee;
    }
  }
`;

export const IssueList = styled.ul`
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;
          line-height: 1.5;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #666666;
          color: #eee;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 10px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const StateIssues = styled.strong`
  background-color: ${(props) =>
    props.state === 'open' ? '#2cbe4e' : '#cb2431'};
  display: inline-block;
  padding: 4px 8px;
  font-weight: 600;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 3px;
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
