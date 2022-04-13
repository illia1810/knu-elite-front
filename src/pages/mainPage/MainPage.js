import React from "react";
import "./styles.css";
import PageHeader from "./pageHeader/PageHeader";
import PageKanbanBoard from "./pageKanbanBoard/PageKanbanBoard"

function MainPage() {
  return (
    <div>
      <PageHeader />
      <PageKanbanBoard />
    </div>
  );
}

export default MainPage;
