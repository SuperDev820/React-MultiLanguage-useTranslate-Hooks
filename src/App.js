import React, { Suspense } from 'react';
import './App.css';
import Loader from "./components/Loader"
import Page from "./components/Page";

// here app catches the suspense from page in case translations are not yet loaded
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;