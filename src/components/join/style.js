import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto 20px auto;
  padding: 200px 0 0 0;
`;
export const UseForm = styled.form`
  position: relative;
  width: 45%;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 16px;
`;

export const Title = styled.div`
  margin: 12px 0 55px 0;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: #1d3763;
`;

export const Section = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto 20px auto;
`;

export const InputBox = styled.div`
  position: relative;
  height: 46px;
  margin: 15px auto 25px auto;
  padding: 5px 6px;
  border: 1px solid #dedede;
  border-radius: 6px;
  background-color: #fff;
  color: #1d3763;
`;

export const InputForm = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  top: 2px;
  background-color: #fff;
  border: 0;
  outline: 0;
  color: #1d3763;
  ::placeholder {
    font-size: 14px;
    padding: 0 0 0 2px;
  }
`;

export const LabelBox = styled.div`
  position: absolute;
  top: -10px;
  padding: 0 10px;
  background-color: #fff;
  color: #1d3763;
  z-index: 5;
  border: 0;
  outline: 0;
`;

export const Message = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto 30px;
  color: #ff0000;
`;

export const BtnBox = styled.div`
  position: relative;
  width: 70%;
  margin: 30px auto;
`;

export const JoinButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #379fff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
  :disabled {
    background-color: grey;
    cursor: auto;
  }
`;
export const ButtonText = styled.div`
  font-size: 16px;
  color: #2c2c2c;
  font-weight: bold;
`;
