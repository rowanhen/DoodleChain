import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ClearCanvas } from "./ClearCanvas";
import { ConnectWallet } from "./ConnectWallet";
import { GenericButton } from "./GenericButton";
import { RoundedButton } from "./RoundedButton";
import { useCanvasDataUrlContract } from "./useCanvasDataUrlContract";
import { CanvasType, CtxType } from "./useDrawCanvas";

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
  const [isHeaderOpen, setHeaderOpen] = useState(true);
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const [mode, setMode] = useState<"EDIT" | "MANUAL">("EDIT");
  const { canvasSaved, saveCurrentCanvas } = useCanvasDataUrlContract();

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
      <Header isOpen={isHeaderOpen}>
        <CollapsibleButton onClick={() => setHeaderOpen(!isHeaderOpen)}>
          {isHeaderOpen ? "←" : "→"}
        </CollapsibleButton>
        {isHeaderOpen && (
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
                  currentCanvasDataUrl &&
                    saveCurrentCanvas(currentCanvasDataUrl);
                }}
              >
                SAVE
              </GenericButton>
            </div>
            <ConnectWallet />
          </HeaderContent>
        )}
      </Header>
      <SideBar isOpen={isSideBarOpen}>
        <CollapsibleButton onClick={() => setSideBarOpen(!isSideBarOpen)}>
          {isSideBarOpen ? "↑" : "↓"}
        </CollapsibleButton>
        {isSideBarOpen && (
          <SideBarContent>
            <div>
              <RoundedButton onClick={() => setHeaderOpen(!isHeaderOpen)}>
                3D
              </RoundedButton>
              <RoundedButton onClick={() => setViewMode(!viewMode)}>
                {`[_]`}
              </RoundedButton>
              <RoundedButton onClick={() => setHeaderOpen(!isHeaderOpen)}>
                $$
              </RoundedButton>
            </div>
            <div>
              <RoundedButton onClick={() => setHeaderOpen(!isHeaderOpen)}>
                {`<>`}
              </RoundedButton>
              <RoundedButton onClick={() => setHeaderOpen(!isHeaderOpen)}>
                {`:)`}
              </RoundedButton>
            </div>
          </SideBarContent>
        )}
      </SideBar>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  overflow: hidden;
  border: 1px solid black;
  background: #ffb300;
  border-radius: 48px;
  border-bottom-right-radius: 0px;
  padding: 12px;
  z-index: 4;
`;

const Header = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 64px;
  width: ${({ isOpen }) => (isOpen ? "100vw" : "220px")};
  transition: height 0.3s ease;
  border: 1px solid black;
  background: #ffffff;
  border-radius: 48px;
  padding: 12px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: calc(100vw - 120px);
  z-index: 3;
  transition: 0.2s;
`;

const SideBar = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "220px")};
  overflow: hidden;
  transition: width 0.3s ease;
  border: 1px solid black;
  background: #ffffff;
  border-radius: 48px;
  padding: 12px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  max-height: calc(100vh - 120px);
  z-index: 3;
  transition: 0.2s;
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
  margin: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CollapsibleButton = styled(RoundedButton)``;
