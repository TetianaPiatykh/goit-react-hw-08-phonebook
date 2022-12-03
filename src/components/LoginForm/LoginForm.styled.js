import styled from "styled-components";

export const FormLogin= styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
    border-radius: 1px;
    border: 3px solid;
    border-color: #a4d7f9;
  // width: 100%;
`;

export const LabelLoginForm = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  
`;


export const SpanLoginForm = styled.span`
margin-bottom: 5px;
font-size: 25px;
color: #295a7a;
`;

export const FormLoginFormBtn = styled.button`
    background-color: #85a4b9;
    border: none;
    color: white;
    padding: 14px 28px;
    text-decoration: none;
    margin: 8px 2px;
    cursor: pointer;
    font-size: 18px;
         &:hover {
    border: 3px solid ;
    border-color: #93a0a9;
    font-size: 24px;
    margin: 6px 2px;
    padding: 10px 20px;
     box-shadow: 1px 1px 2px 3px #85a4b9;
     }
`;

export const InputLoginForm = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    outline: none;
    // box-sizing: border-box;
    border-radius: 4px;
    border: 3px solid;
    border-color: #a4d7f9;

     &:focus {
    border: 3px solid ;
    border-color: #d6efff;
     background-color: #f8fcff;
     box-shadow: 1px 1px 2px 3px #d6efff;
     }`;