import { useState } from "react";
import styled from "styled-components";
import { EditCanvas } from "./EditCanvas";
import { HeaderSideBar } from "./HeaderSideBar";
import { ViewAllCanvas } from "./ViewAllCanvas";
import { useDrawCanvas } from "./useDrawCanvas";

const App = () => {
  const { canvasRef, ctxRef, startDrawing, endDrawing, draw } = useDrawCanvas();
  const [viewMode, setViewMode] = useState(false);

  return (
    <AppContainer>
      <HeaderSideBar
        canvasRef={canvasRef}
        ctxRef={ctxRef}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      {viewMode && <ViewAllCanvas />}
      <EditCanvas
        canvasRef={canvasRef}
        startDrawing={startDrawing}
        endDrawing={endDrawing}
        draw={draw}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: 24px;
`;

export default App;
