import styled from "styled-components";
import { useCanvasDataUrlContract } from "../Canvas/hooks/useCanvasDataUrlContract";
import {
  SavedCanvasEvent,
  useCanvasEventListener,
} from "../Canvas/hooks/useCanvasEventListener";
import { GenericEvent } from "./Event";

export type LocalStorageActivityTab = {
  open: boolean;
};

export const ActivityTab = () => {
  const contract = useCanvasDataUrlContract();
  const { recentlySaved } = useCanvasEventListener(contract);

  return (
    <Container>
      <Title>Activity</Title>
      {recentlySaved.map((event: SavedCanvasEvent, index) => {
        return <GenericEvent key={index} event={event} />;
      })}
    </Container>
  );
};

const Title = styled.h3``;

const Container = styled.div`
  position: fixed;
  z-index: 5;
  background: white;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  border-left: 1px solid black;
  padding: 12px;
`;
