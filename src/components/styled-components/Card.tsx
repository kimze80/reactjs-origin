import styled from 'styled-components';

export const Card = styled.div`
  width: 560px;
  height: 600px;
  border-radius: 5px;
  padding: 40px;
  border: #e1e8ed solid 0.5px;
  background-color: white;
  margin-bottom: 74px;

  .header {
    margin-bottom: 25px;

    .header-icon {
      margin-bottom: 5px;
    }
  }

  .inputs-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .inputs {
      flex: 0 1 48%;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 690px;
    margin-bottom: 0;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;

    .inputs-row {
      display: block;
      /* flex-wrap: wrap;
      justify-content: space-between; */

      .inputs {
        flex: 0;
      }
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

export const CardMonth = styled.div`
  height: 38px;
  width: 100%;
  border-top: #e1e8ed solid 0.5px;
  border-bottom: #e1e8ed solid 0.5px;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;

  .month {
    font-size: 0.8em;
    font-weight: bold;
  }

  .year {
    font-size: 0.7em;
  }
`;

export const InputMonth = styled.input`
  height: 38px;
  width: 100%;
  border-top: #e1e8ed solid 0.5px;
  border-bottom: #e1e8ed solid 0.5px;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;

`;

