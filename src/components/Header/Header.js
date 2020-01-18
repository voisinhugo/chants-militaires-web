import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { LeftArrow } from "../Icons";
import { useHistory } from "react-router";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.color.header};
  padding-left: ${theme.margin.x1}px;
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

const BackArrow = styled(LeftArrow)`
  margin: ${theme.margin.x1}px;
`;

export const Header = ({ title, hasGoBack }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      {hasGoBack && (
        <BackArrow
          size={theme.fontSize.title}
          color={theme.color.white}
          onClick={() => history.goBack()}
        />
      )}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
