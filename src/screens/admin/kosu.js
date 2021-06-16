import React, { useContext,useState }  from "react";
import { Link, Redirect } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import {AppHeader} from "./AppHeader";
import {AppContent} from "./AppContent";
import KosuList from "./Kosu/KosuList";
import { AuthContext } from "../../services/auth";
import { firestore } from "../../services/firebase/firebase";

const KosuKanri = () => {
  const [privilege, setPrivilege] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const UID = currentUser?.uid;
  const db = firestore.doc(`User/${UID}`);
  db.get().then((doc) => {
    if (doc.exists) {
      setPrivilege(doc.data().privilege);
    }
  });
  if (currentUser && (privilege === 'admin')) {
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
  )}else {
    return <Redirect to='/' />}
}
export default KosuKanri

