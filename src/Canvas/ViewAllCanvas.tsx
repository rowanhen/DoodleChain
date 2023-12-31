import { useState } from "react";
import styled, { css } from "styled-components";
import { useModal } from "../components/Modal/useModal";
import { calculateCanvasHeight } from "../helpers";
import { useCanvasDataUrlContract } from "./hooks/useCanvasDataUrlContract";
import { useCanvasFetcher } from "./hooks/useCanvasFetcher";

const CANVAS_SIZE = 64;

export const ViewAllCanvas = () => {
  const { open, Modal } = useModal();

  const contract = useCanvasDataUrlContract();
  const { canvases } = useCanvasFetcher(contract);

  const [selectedCanvas, setSelectedCanvas] = useState<{
    canvasData: string;
    index: number | null;
  }>({ canvasData: "", index: null });

  const size = calculateCanvasHeight(canvases.length) * CANVAS_SIZE;
  const width = size + "px";
  const height = size + "px";

  const totalSize = calculateCanvasHeight(canvases.length);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${totalSize}, ${width})`,
          gap: "24px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {canvases.map((canvasImg, index) => {
          return (
            <ImgButton
              style={{
                width,
                height,
              }}
              onClick={() => {
                setSelectedCanvas({ canvasData: canvasImg, index });
                open();
              }}
              selected={selectedCanvas.index === index}
            >
              <Img src={canvasImg} />
            </ImgButton>
          );
        })}
        <Modal title="Viewing canvas">
          <Img
            src={selectedCanvas.canvasData}
            style={{
              width,
              height,
            }}
          />
        </Modal>
      </Container>
    </div>
  );
};

const Container = styled.div`
  z-index: 3;
`;

const ImgButton = styled.button<{ selected: boolean }>`
  transition: 0.9s;
  background: #eeeeee;
  ${({ selected }) =>
    selected &&
    css`
      background: #0000ff;
      cursor: pointer;

      img {
        filter: invert(1);
      }
    `}
  &:hover {
    background: #0000ff;
    cursor: pointer;

    img {
      filter: invert(1);
    }
  }
  &:focus {
    background: #0000ff;
    cursor: pointer;

    img {
      filter: invert(1);
    }
  }
`;

const Img = styled.img`
  transition: 0.9s;
  filter: invert(0);
  width: 100%;
  image-rendering: pixelated;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
