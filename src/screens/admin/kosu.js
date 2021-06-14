import React from "react";
import AppSidebar from "./AppSidebar";
import {AppHeader} from "./AppHeader";
import {AppContent} from "./AppContent";
import KosuList from "./Kosu/KosuList"
const AdminPage = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <KosuList/>
        </div>
      </div>
    </div>
  )
}
export default AdminPage

