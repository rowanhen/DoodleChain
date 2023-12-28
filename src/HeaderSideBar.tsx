import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { ClearCanvas } from "./Canvas/ClearCanvas";
import { useCanvasDataUrlContract } from "./Canvas/hooks/useCanvasDataUrlContract";
import { CanvasType, CtxType } from "./Canvas/hooks/useDrawCanvas";
import { ConnectWallet } from "./ConnectWallet";
import { GenericButton } from "./components/GenericButton";
import { Logo } from "./components/Logo";
import { RoundedButton } from "./components/RoundedButton";

interface Props {
  viewMode: boolean;
  setViewMode: (arg: boolean) => void;
}

export const HeaderSideBar: FC<CtxType & CanvasType & Props> = ({
  canvasRef,
  ctxRef,
  viewMode,
  setViewMode,
}) => {
  const [mode, setMode] = useState<"EDIT" | "MANUAL">("EDIT");
  const { canvasSaved, saving, saveCurrentCanvas } = useCanvasDataUrlContract();

  const currentCanvasDataUrl = canvasRef?.current?.toDataURL();

  useEffect(() => {
    if (!canvasSaved) return;
    if (ctxRef.current) {
      ctxRef.current?.clearRect(0, 0, 16, 16);
    }
  }, [canvasSaved]);

  return (
    <Layout>
      <Logo />
      <Header type="header">
        <HeaderContent>
          <div>
            <ClearCanvas ctxRef={ctxRef} />
            <GenericButton
              onClick={() => {
                if (mode === "EDIT") return setMode("MANUAL");
                else return setMode("EDIT");
              }}
            >
              {mode}
            </GenericButton>
            <GenericButton
              onClick={() => {
                currentCanvasDataUrl && saveCurrentCanvas(currentCanvasDataUrl);
              }}
            >
              {saving ? "SAVING..." : "SAVE"}
            </GenericButton>
          </div>
          <ConnectWallet />
        </HeaderContent>
      </Header>
      <Header type="sidebar">
        <SideBarContent>
          <div>
            <RoundedButton onClick={() => ""}>3D</RoundedButton>
            <RoundedButton onClick={() => setViewMode(!viewMode)}>
              All
            </RoundedButton>
          </div>
        </SideBarContent>
      </Header>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
`;

const Header = styled.div<{ type: "header" | "sidebar" }>`
  position: absolute;
  top: 0;
  left: 0;

  ${({ type }) =>
    type === "header"
      ? css`
          height: 64px;
          width: "100vw";
          max-width: calc(100vw - 120px);
          flex-direction: row-reverse;
        `
      : css`
          width: 64px;
          height: 100vh;
          max-height: calc(100vh - 120px);
          flex-direction: column-reverse;
        `}
  transition: height 0.3s ease;
  padding: 12px;
  display: flex;
  align-items: center;
  z-index: 3;
`;

const SideBarContent = styled.div`
  flex-grow: 1;
  margin: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  margin: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
