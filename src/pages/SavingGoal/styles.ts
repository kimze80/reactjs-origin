import styled from 'styled-components';

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  color?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin: ${props => props.margin};
  color: ${props => props.color};
`;

export const Container = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 576px) {
    
  }
`;

export const Card = styled.div`
  width: 560px;
  height: 600px;
  border-radius: 5px;
  padding: 40px;
  border: #e1e8ed solid 0.5px;
  background-color: white;
  margin-bottom: 74px;

  @media (max-width: 576px) {
    width: 100%;
    height: 690px;
    margin-bottom: 0;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
  }

`;

export const Header = styled.div`
  margin-bottom: 25px;

  .header-icon {
    margin-bottom: 5px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .inputs {
    flex: 0 1 48%;
  }

  @media (max-width: 576px) {
    display: block;

    .inputs {
      flex: 0;
    }
  }
`;

export const CardInside = styled.div`
  width: 100%;
  height: 168px;
  border-radius: 3px;
  border: #e1e8ed solid 0.5px;
  margin: 20px 0 30px;
  /* padding: 22px; */

  .card-inside-body {
    height: 60%;
    width: 100%;
    padding: 15px 30px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .monthly-text, .monthly-value {
      flex: 0 1 35%;
    }

    .monthly-text {
      align-self: center;

      span {
        font-size: 1.14em;
      }

      .monthly-web {
        display: block;
      }

      .monthly-mobile {
        display: none;
      }
    }

    .monthly-value {
      align-self: center;

      span {
        font-size: 2.5em;
        color: #0079FF;
      }
      
    }
  }

  .card-inside-footer {
    background: #eff7ff;
    height: 40%;
    width: 477px;
    margin: auto;
    padding: 10px 18px;

    span {
      font-size: 0.8em;
    }
  }

  @media (max-width: 576px) {
    margin: 15px 0 30px;

    .card-inside-body {
      .monthly-text {
        span {
          font-size: 1em;
        }

        .monthly-web {
          display: none;
        }

        .monthly-mobile {
          display: block;
        }
      }

      .monthly-value {
        display: flex;
        justify-content: flex-end;
        span {
          font-size: 1.6em;
        }
      }
    }

    .card-inside-footer {
      width: 99.7%;

      span {
        font-size: 0.8em;
      }
    }
    
  }
`;

export const FinishButton = styled.button`
  width: 84%;
  height: 56px;
  border-radius: 50px;
  background: #1b31a8;
  border-color: #1b31a8;
  color: white;
  font-size: 1.1em;
  /* border: #e1e8ed solid 0.5px; */
  :hover {
    background: #090592;
    border-color: #090592;
  }
  :focus {
    outline: none;
  }
`;
