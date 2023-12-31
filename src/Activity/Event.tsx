import { FC } from "react";
import styled from "styled-components";
import { SavedCanvasEvent } from "../Canvas/hooks/useCanvasEventListener";

type GenericEventProps = { event: SavedCanvasEvent };

export const GenericEvent: FC<GenericEventProps> = ({ event }) => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ID>ID: {event.id}</ID>
        <Time>
          {new Intl.DateTimeFormat("en-US").format(
            new Date(Number(event.timestamp) * 1000)
          )}
        </Time>
      </div>
      <User>By: {event.user}</User>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 12px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 8px;
`;

const Time = styled.p``;
const ID = styled.p``;
const User = styled.p`
  word-wrap: break-word;
`;
