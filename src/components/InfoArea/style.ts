import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;

  @media only screen and (max-width: 480px) {
    width: 100vw;
  }
`;
