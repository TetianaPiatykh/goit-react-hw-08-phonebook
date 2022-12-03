import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;


export const UserName = styled.p`
  font-weight: 700;
  color: #295a7a;
`;
  
export const UserMenuBtn = styled.button`
    background-color: #85a4b9;
    border: none;
    color: white;
    padding: 4px 9px;
    text-decoration: none;
    margin: 4px 4px;
    cursor: pointer;
    font-size: 14px;
         &:hover {
    border: 2px solid ;
    margin: 2px 4px;
    border-color: #93a0a9;
    font-size: 15px;
    padding: 2px 5px;
     box-shadow: 1px 1px 2px 3px #85a4b9;
`
