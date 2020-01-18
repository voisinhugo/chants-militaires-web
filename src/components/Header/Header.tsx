import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { LeftArrow } from "../Icons";
import { useHistory } from "react-router";

export const HEADER_HEIGHT = 60;

interface Props {
  title: string;
  hasGoBack?: boolean;
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.color.header};
  padding-left: ${theme.margin.x1}px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.title}px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block-start: ${theme.margin.x2}px;
  padding-block-end: ${theme.margin.x2}px;
  margin-left: ${theme.margin.x1}px;
`;

const BackArrowContainer = styled.div`
  display: flex;
  margin: ${theme.margin.x1}px;
`;

const BackArrow = styled(LeftArrow).attrs({
  size: theme.fontSize.title,
  color: theme.color.white
})``;

export const Header: FunctionComponent<Props> = ({ title, hasGoBack }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      {hasGoBack && (
        <BackArrowContainer onClick={() => history.goBack()}>
          <BackArrow />
        </BackArrowContainer>
      )}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
