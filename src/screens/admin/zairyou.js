import React, { useContext,useState } from "react";
import AppSidebar from "./AppSidebar";
import {AppHeader} from "./AppHeader";
import {AppContent} from "./AppContent";
import DocList from "./Zairyou/DocList";
import { AuthContext } from "../../services/auth";
import { firestore } from "../../services/firebase/firebase";
import { Link, Redirect } from "react-router-dom";


const ZairyouKanri = () => {
  const [privilege, setPrivilege] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const UID = currentUser?.uid;
  const db = firestore.doc(`User/${UID}`);

  db.get().then((doc) => {
    if (doc.exists) {
      if(doc.data().privilege === 'admin'){
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
      )}else{
      <Redirect to='/' />}
    }
});

}
export default ZairyouKanri

