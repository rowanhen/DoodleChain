import { FC } from "react";
import styled from "styled-components";
import { useCanvasDataUrlContract } from "../Canvas/hooks/useCanvasDataUrlContract";
import {
  SavedCanvasEvent,
  useCanvasEventListener,
} from "../Canvas/hooks/useCanvasEventListener";
import { GenericButton } from "../components/GenericButton";
import { GenericEvent } from "./Event";

export type LocalStorageActivityTab = {
  open: boolean;
};

export const ActivityTab: FC<{
  setActivityTabOpen: (arg: boolean) => void;
}> = ({ setActivityTabOpen }) => {
  const contract = useCanvasDataUrlContract();
  const { recentlySaved } = useCanvasEventListener(contract);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>Activity</Title>
        <GenericButton onClick={() => setActivityTabOpen(false)}>
          X
        </GenericButton>
      </div>
      <EventsContainer>
        {recentlySaved.map((event: SavedCanvasEvent, index) => {
          return <GenericEvent key={index} event={event} />;
        })}
      </EventsContainer>
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
  border-left: 1px solid black;
  padding: 12px;
  height: 100vh;
  overflow: hidden;
`;

const EventsContainer = styled.div`
  height: calc(100% - 500px);
  overflow: scroll;
  border: 1px solid black;
  padding: 12px;
`;
