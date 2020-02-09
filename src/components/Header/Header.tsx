import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { LeftArrow } from "../Icons";
import { useHistory } from "react-router";
import { Burger } from "../Burger";

export const HEADER_HEIGHT = 60;
const TITLE_BIG_MARGIN = 58;

export type HeaderLeftComponent = "go-back" | "burger-menu";

interface Props {
  title: string;
  leftComponent?: HeaderLeftComponent;
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
  z-index: 1;
`;

const HeaderTitle = styled.h1(
  ({ hasLeftMargin }: { hasLeftMargin: boolean }) => `
  color: ${theme.color.white};
  font-size: ${theme.fontSize.title}px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block-start: ${theme.margin.x2}px;
  padding-block-end: ${theme.margin.x2}px;
  margin-left: ${hasLeftMargin ? TITLE_BIG_MARGIN : theme.margin.x1}px;
`
);

const BackArrowContainer = styled.div`
  display: flex;
  margin: ${theme.margin.x1}px;
`;

const BackArrow = styled(LeftArrow).attrs({
  size: theme.fontSize.title,
  color: theme.color.white
})``;

export const Header: FunctionComponent<Props> = ({ title, leftComponent }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      {leftComponent === "go-back" && (
        <BackArrowContainer onClick={() => history.goBack()}>
          <BackArrow />
        </BackArrowContainer>
      )}
      {leftComponent === "burger-menu" && <Burger />}
      <HeaderTitle hasLeftMargin={leftComponent === "burger-menu"}>
        {title}
      </HeaderTitle>
    </HeaderContainer>
  );
};
