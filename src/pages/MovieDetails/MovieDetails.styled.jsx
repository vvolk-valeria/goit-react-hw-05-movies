import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px 50px 20px;
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

export const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  color: rgb(29, 107, 125);
  border-radius: 5px;
  border: none;
  margin-bottom: 6px;
  box-shadow: 0px 0px 2px 2px rgba(146, 207, 235, 0.75);
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 2px 2px rgb(125, 177, 201);
  }
`;

export const ItemImgCover = styled.div`
  display: block;
  width: 400px;
  height: 500px;
  height: auto;

  overflow: hidden;
  object-fit: cover;
`;
export const About = styled.div`
  margin-left: 20px;
  padding: 10px;
`;

export const Title = styled.h1`
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
  color: rgb(29, 107, 125);
  margin-bottom: 8px;
`;

export const BoxTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: rgb(29, 107, 125);
  margin-bottom: 5px;
`;

export const InfoTitle = styled.h2`
  padding: 6px;
  font-weight: 600;
  font-size: 18px;
  color: rgb(29, 107, 125);
  margin-bottom: 8px;
`;
