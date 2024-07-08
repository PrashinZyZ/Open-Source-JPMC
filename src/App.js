// src/App.js
import React, { useEffect, useRef } from 'react';
import {
  SaltProvider,
  Button,
  Dropdown,
  Spinner,
  FlexLayout,
  StackLayout
} from '@salt-ds/core';
import '@finos/perspective-viewer';
import '@finos/perspective-viewer/dist/umd/material/perspective-viewer-material.css';

const App = () => {
  const perspectiveViewerRef = useRef(null);

  useEffect(() => {
    const viewer = perspectiveViewerRef.current;
    const data = [
      { name: "A", value: 1 },
      { name: "B", value: 2 },
      { name: "C", value: 3 },
    ];
    viewer.load(perspective.table(data));
  }, []);

  const refreshData = () => {
    // Add your data refresh logic here
  };

  const handleOptionChange = (event) => {
    // Handle dropdown option change
  };

  const handleSliderChange = (event) => {
    // Handle slider change
  };

  return (
    <SaltProvider>
      <FlexLayout column>
        <header>Perspective Dashboard</header>
        <main>
          <StackLayout column>
            <div className="control-panel">
              <Button onClick={refreshData}>Refresh Data</Button>
              <Dropdown
                items={["Option 1", "Option 2"]}
                onChange={handleOptionChange}
              />
              <Spinner />
            </div>
            <perspective-viewer ref={perspectiveViewerRef}></perspective-viewer>
          </StackLayout>
        </main>
        <footer>Powered by Perspective and Salt-DS</footer>
      </FlexLayout>
    </SaltProvider>
  );
};

export default App;
