import { FC } from "react";
import styled, { css } from "styled-components";
import { ConnectWallet } from "./ConnectWallet";
import { GenericButton } from "./components/GenericButton";
import { Logo } from "./components/Logo";
import { RoundedButton } from "./components/RoundedButton";

interface Props {
  viewMode: boolean;
  setViewMode: (arg: boolean) => void;
}

export const HeaderSideBar: FC<Props> = ({ viewMode, setViewMode }) => {
  return (
    <>
      <Content type="header">
        <Logo />
        <div style={{ marginLeft: "24px" }}>
          <ConnectWallet />
        </div>
      </Content>
      <Content type="sidebar">
        <div style={{ marginTop: "24px" }}>
          <RoundedButton onClick={() => ""}>3D</RoundedButton>
          <GenericButton onClick={() => setViewMode(!viewMode)}>
            TOGGLE: {viewMode ? "ALL" : "EDIT"}
          </GenericButton>
        </div>
      </Content>
    </>
  );
};

const Content = styled.div<{ type: "header" | "sidebar" }>`
  margin: 24px;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;

  ${({ type }) =>
    type === "header"
      ? css`
          height: 64px;
          width: 100vw;
          flex-direction: row;
        `
      : css`
          top: 64px;
          width: 64px;
          height: 100vh;
          flex-direction: column;
        `}
`;
