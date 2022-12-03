import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #295a7a;

  &.active {
  color: #a4d7f9;
}
`;