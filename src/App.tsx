import { useState } from "react";
import styled from "styled-components";
import { EditCanvas } from "./Canvas/EditCanvas";
import { ViewAllCanvas } from "./Canvas/ViewAllCanvas";
import { useDrawCanvas } from "./Canvas/hooks/useDrawCanvas";
import { HeaderSideBar } from "./HeaderSideBar";

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
