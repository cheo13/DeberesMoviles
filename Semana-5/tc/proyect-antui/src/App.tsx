import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import StartInit from "./pages/page-init";
import ComponentsPage from "./pages/page-componets";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<StartInit />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
