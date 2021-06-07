import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT,
} from "../../../constant/action-types";
import { firebaseAuth } from "../../../services/firebase/firebase";
import { store } from "../../store";

export const signUp = (user) => {
  firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then(() => store.dispatch({ type: AUTH_SUCCESS }))
    .catch(() => store.dispatch({ type: AUTH_ERROR }));
};

export const signIn = (user) => {
  firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
    .then(() => store.dispatch({ type: AUTH_SUCCESS }))
    .catch(() => store.dispatch({ type: AUTH_ERROR }));
};

export const signOut = () => {
  firebaseAuth.signOut().then(() => store.dispatch({ type: SIGN_OUT }));
};