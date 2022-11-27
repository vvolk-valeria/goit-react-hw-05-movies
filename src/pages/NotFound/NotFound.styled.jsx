import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px 50px 20px;
`;

export const Title = styled.h1`
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
  color: rgb(29, 107, 125);
  text-align: center;
  margin-bottom: 20px;
`;

export const LinkToBack = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  color: rgb(29, 107, 125);
  border-radius: 5px;
  border: none;

  box-shadow: 0px 0px 5px 5px rgba(146, 207, 235, 0.75);
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 5px rgb(125, 177, 201);
  }
`;
