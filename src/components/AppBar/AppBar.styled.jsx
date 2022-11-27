import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: rgba(150, 248, 230, 0.8);
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 5px 5px 2px rgba(146, 207, 235, 0.75);
  padding: 20px 20px;
  text-align: center;
`;

export const LinkItem = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  color: rgb(29, 107, 125);
  border-radius: 5px;
  border: none;
  background-color: rgba(120, 226, 207, 0.8);
  box-shadow: 0px 0px 5px 5px rgba(146, 207, 235, 0.75);

  &.active {
    color: white;
    background-color: rgb(96, 98, 226);
    box-shadow: 0px 0px 5px 5px rgb(77, 125, 148);
  }
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 5px rgb(125, 177, 201);
  }
`;
