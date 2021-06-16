import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../firebase/firebase";
import {Loading} from "../../components/Loading";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const isAdmin = false;

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Loading/>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
  );
};
