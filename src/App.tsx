import { useState } from "react";
import styled from "styled-components";
import { EditCanvas } from "./Canvas/EditCanvas";
import { ViewAllCanvas } from "./Canvas/ViewAllCanvas";
import { HeaderSideBar } from "./HeaderSideBar";

const App = () => {
  const [viewMode, setViewMode] = useState(false);

  return (
    <AppContainer>
      <HeaderSideBar viewMode={viewMode} setViewMode={setViewMode} />
      {viewMode && <ViewAllCanvas />}
      {!viewMode && <EditCanvas />}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: 24px;
`;

export default App;
