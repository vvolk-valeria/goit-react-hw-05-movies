import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 20px 30px 20px;
`;

export const List = styled.ul`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

export const LinkItem = styled.li`
  text-decoration: none;
  padding: 4px;
  color: rgb(32, 89, 102);
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 2px 2px rgba(146, 207, 235, 0.75);

  @media screen and (min-width: 390px) {
    width: calc((100% - 10px * 4) / 5);
  }
  @media screen and (min-width: 725px) {
    width: calc((100% - 10px * 5) / 6);
  }
  @media screen and (min-width: 1080px) {
    width: calc((100% - 10px * 6) / 7);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 10px * 7) / 8);
  }
`;

export const ItemImgCover = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 80px;
  height: 120px;
  background-color: #a1a1a1;
  overflow: hidden;
  object-fit: cover;
  margin-bottom: 6px;
`;

export const Title = styled.p`
  padding: 4px;
`;
