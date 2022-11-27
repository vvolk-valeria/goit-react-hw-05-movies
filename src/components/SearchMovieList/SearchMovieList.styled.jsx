import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px 50px 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;

export const Item = styled.li`
  margin-right: auto;
  margin-left: auto;
  text-decoration: none;
  cursor: pointer;
  display: block;
  height: auto;
  width: 250px;
  border-radius: 5px;
  overflow: hidden;

  box-shadow: 0px 1px 7px 3px rgba(29, 16, 102, 0.75);
  :hover {
    box-shadow: 0px 0px 7px 6px rgba(32, 28, 59, 0.75);
  }
  @media screen and (min-width: 390px) {
    width: 250px;
  }
  @media screen and (min-width: 725px) {
    width: calc((100% - 20px * 2) / 3);
  }
  @media screen and (min-width: 1080px) {
    width: calc((100% - 20px * 3) / 4);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 20px * 4) / 5);
  }
`;

export const ItemImgCover = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 250px;
  height: 375px;
  background-color: #a1a1a1;
  overflow: hidden;
  object-fit: cover;
`;

export const Img = styled.img`
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.p`
  padding: 10px;
  font-weight: 700;
  font-size: 16px;
  color: rgb(29, 107, 125);
`;
