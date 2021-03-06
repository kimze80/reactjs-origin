import styled from 'styled-components';

export const Container = styled.div`
  .input-goal {

    #currency-icon {
      font-size: 22px;
      background: #eff7ff;
      color: #657786;
      border: #e1e8ed solid 0.5px;
      padding: 10px 20px;
    }

    input {
      border: #e1e8ed solid 0.5px;
      height: 56px;
      font-size: 20px;
    }
  }

  @media (max-width: 576px) {
    .input-goal {
      margin-bottom: 15px;
    }
  }
`;