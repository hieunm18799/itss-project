import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as ROUTES from "./constant/routes";
import { AuthProvider } from "./services/auth";

import { SignInPage } from "./screens/signIn";
import { SignUpPage } from "./screens/signUp";
import { References } from "./screens/references";
import { LandingPage } from "./screens/landing";
import { Course } from "./screens/course";
import { DetailCourse } from "./screens/detailCourse";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Temp } from "./screens/lessons/tmpLesson";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.REFERENCES} component={References} />
          <Route exact path={ROUTES.COURSE} component={Course} />
          <Route exact path="/course/:stateCourse/:id" component={DetailCourse}
          />
          <Route exact path="/course/:stateCourse/:id/:typeLesson" component={Temp}
          />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
