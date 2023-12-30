import styled from "styled-components";
import { useCanvasDataUrlContract } from "../Canvas/hooks/useCanvasDataUrlContract";
import {
  SavedCanvasEvent,
  useCanvasEventListener,
} from "../Canvas/hooks/useCanvasEventListener";

export type LocalStorageActivityTab = {
  open: boolean;
};

export const ActivityTab = () => {
  const contract = useCanvasDataUrlContract();
  const { recentlySaved } = useCanvasEventListener(contract);

  console.log(recentlySaved, "recentlySaved");

  return (
    <Container>
      <Title>Activity</Title>
      {recentlySaved.map((event: SavedCanvasEvent, index) => (
        <div key={index}>
          <p>ID: {event.id}</p>
          <p>Data: {event.canvas}</p>
          <p>By: {event.user}</p>
          <p>
            Timestamp:{" "}
            {new Date(Number(event.timestamp) * 1000).toLocaleString()}
          </p>
        </div>
      ))}
    </Container>
  );
};

const Title = styled.h3``;

const Container = styled.div`
  position: fixed;
  z-index: 3;
  background: white;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  border-left: 1px solid black;
  padding: 12px;
`;
