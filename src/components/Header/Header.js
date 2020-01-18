import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const HeaderContainer = styled.div`
  background-color: ${theme.color.header};
`;

const HeaderTitle = styled.h1`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.title}px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block-start: ${theme.margin.x2}px;
  padding-block-end: ${theme.margin.x2}px;
  margin-left: ${theme.margin.x2}px;
`;

export const Header = ({ title }) => (
  <HeaderContainer>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderContainer>
);
