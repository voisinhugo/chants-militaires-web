import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { LeftArrow } from "../Icons";
import { useHistory } from "react-router";

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

const BackArrow = styled(LeftArrow).attrs({
  size: theme.fontSize.title,
  color: theme.color.white
})`
  margin: ${theme.margin.x1}px;
`;

export const Header: FunctionComponent<Props> = ({ title, hasGoBack }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      {hasGoBack && (
        <div onClick={() => history.goBack()}>
          <BackArrow />
        </div>
      )}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
