import React from "react";
import AppSidebar from "./AppSidebar";
import {AppHeader} from "./AppHeader";
import {AppContent} from "./AppContent";
import DocList from "./Zairyou/DocList";
const ZairyouKanri = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <DocList/>
        </div>
      </div>
    </div>
  )
}
export default ZairyouKanri

