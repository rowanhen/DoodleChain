import { useState } from "react";
import styled from "styled-components";
import { ActivityTab } from "./Activity/ActivityTab";
import { EditCanvas } from "./Canvas/EditCanvas";
import { ViewAllCanvas } from "./Canvas/ViewAllCanvas";
import { HeaderSideBar } from "./HeaderSideBar";
import { GlobalStyle } from "./globalStyle";
import { useLocalStorageNonString } from "./hooks/useNonStringLocalStorage";

const App = () => {
  const [viewMode, setViewMode] = useState(false);
  const [activityTabOpen, setActivityTabOpen] = useLocalStorageNonString(
    "activityTabOpen",
    false
  );

  return (
    <AppContainer>
      <GlobalStyle key="globalstyles" />
      <HeaderSideBar
        viewMode={viewMode}
        setViewMode={setViewMode}
        activityTabOpen={activityTabOpen}
        setActivityTabOpen={setActivityTabOpen}
      />
      {viewMode && <ViewAllCanvas />}
      {!viewMode && <EditCanvas />}
      {activityTabOpen && <ActivityTab />}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: 24px;
  height: 100vh;
`;

export default App;
