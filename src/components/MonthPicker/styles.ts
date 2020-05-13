import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .input-months {
    position: relative;
    height: 56px !important;
    border-radius: unset;
    border: #e1e8ed solid 0.5px !important;
    color: transparent !important;
  }

  .btn {
    width: 48px;
    height: 56px;
    background: #e1e8ed !important;
    border-color: #e1e8ed !important;
    color: #657786 !important;
    /* border: #e1e8ed solid 0.5px; */
    :hover {
      background: #aab8c2 !important;
      border-color: #aab8c2 !important;
    }
    :focus {
      outline: none !important;
    }
  }

  .btn.btn-primary {
    background: #e1e8ed !important;
  }

  .btn.btn-primary:focus {
    outline: 0 !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .btn.btn-primary:active,
  .btn.btn-primary:hover,
  .btn.btn-primary:focus {
    background: #aab8c2 !important;
    border-color: #aab8c2 !important;
    outline: none !important;
  }

  .right-btn {

    svg {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }

  @media (max-width: 576px) {
    .input-months {
      input {
        width: -webkit-fill-available;
        // text-shadow: 0 0 0 white;
      }
    }
  }

`;

export const MonthYearBox = styled.div`
  text-align: center;
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Month = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0;
`;

export const Year = styled.p`
  font-size: 1em;
  margin-bottom: 0;
`;