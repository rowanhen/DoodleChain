import { useState } from "react";
import styled from "styled-components";
import { useModal } from "../components/Modal/useModal";
import { calculateCanvasHeight } from "../helpers";
import { CanvasContiner } from "./EditCanvas";
import { useCanvasDataUrlContract } from "./hooks/useCanvasDataUrlContract";

const CANVAS_SIZE = 64;

export const ViewAllCanvas = () => {
  const { open, Modal } = useModal();
  const { canvases } = useCanvasDataUrlContract();
  const [selectedCanvas, setSelectedCanvas] = useState("");

  const size = calculateCanvasHeight(canvases.length) * CANVAS_SIZE;
  const width = size + "px";
  const height = size + "px";

  const totalSize = calculateCanvasHeight(canvases.length);

  return (
    <CanvasContiner
      style={{
        zIndex: "1",
      }}
    >
      {canvases.map((canvasImg, index) => {
        const x = (index % totalSize) * size; // Adjust these calculations based on your layout
        const y = Math.floor(index / totalSize) * size;
        return (
          <ImgButton
            style={{
              position: "absolute",
              top: y,
              left: x,
              width: width,
              height: height,
            }}
            onClick={() => {
              setSelectedCanvas(canvasImg);
              open();
            }}
          >
            <Img src={canvasImg} />
          </ImgButton>
        );
      })}
      <Modal>
        <ImgButton
          style={{
            width: width,
            height: height,
          }}
        >
          <Img src={selectedCanvas} />
        </ImgButton>
      </Modal>
    </CanvasContiner>
  );
};

const ImgButton = styled.button`
  transition: 0.2s;
  &:hover {
    background: red;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  image-rendering: pixelated;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
