import styled, { css } from 'styled-components';

interface IProps {
  type?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  height: calc(100vh - 160px);
  background: #f5f8fa;
  border: 1px solid rgba(221, 221, 221, 0.3);

  p {
    margin: 10px;
    color: #636466;
    font-size: 15px;
    line-height: 16px;
    padding: 12px;
    background: #dbf3f8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
  }
`;

export const TopStart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  span::before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 1px;
    left: 0;
    top: 50%;
    background: #dddddd;
  }
  p {
    z-index: 2;
    color: #636466;
    font-size: 15px;
    line-height: 16px;
    padding: 10px 24px;
    background: #dbf3f8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    strong {
      color: #333333;
    }
  }
`;

export const ContentMessages = styled.div`
  margin-top: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const HeaderMessages = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props): string =>
    props.type === 'incoming' ? 'flex-start' : 'flex-end'};

  img {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    strong {
      font-weight: bold;
      font-size: 15px;
      color: #636466;
    }

    span {
      font-size: 15px;
      color: #636466;
    }

    svg {
      margin: 0 20px;
      color: #4fc3f7;
    }
  }
`;

export const BodyMessages = styled.div<IProps>`
  flex: 1;
  padding: 20px;
  background: #ffffff;
  width: 50%;
  margin: 10px;
  margin-left: ${(props): string => (props.type === 'incoming' ? '' : 'auto')};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 15px;
  border-radius: ${(props): string =>
    props.type === 'incoming' ? '0 10px 10px 10px' : '10px 0 10px 10px'};

  ${props =>
    props.type === 'incoming'
      ? css`
          &::before {
            content: '';
            position: relative;
            left: calc(0% - 20px);
            top: -50px;
            width: 0;
            height: 0;
            border-left: -20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid #fff;
          }
        `
      : css`
          &::before {
            content: '';
            position: relative;
            left: 100%;
            top: -50px;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: -20px solid transparent;
            border-bottom: 20px solid #fff;
          }
        `}
`;
