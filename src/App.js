import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './scss/style.scss';
import * as ROUTES from "./constant/routes";
import { AuthProvider } from "./services/auth";

import { SignInPage } from "./screens/signIn";
import { SignUpPage } from "./screens/signUp";
import { References } from "./screens/references";
import  LandingPage  from "./screens/landing";
import  AdminPage  from "./screens/admin";
import  KosuKanri  from "./screens/admin/kosu";
import  YuzaKanri  from "./screens/admin/user";
import  ZairyouKanri  from "./screens/admin/zairyou";
import { Course } from "./screens/course";
import { DetailCourse } from "./screens/detailCourse";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Temp } from "./screens/lessons/tmpLesson";
import store from './store';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path="/admin" name="Admin" render={(props) => <AdminPage {...props} />}/>
            <Route exact path="/admin/kosu" name="KosuKanri" render={(props) => <KosuKanri {...props} />}/>
            <Route exact path="/admin/yuza" name="YuzaKanri" render={(props) => <YuzaKanri {...props} />}/>
            <Route exact path="/admin/zairyou" name="ZairyouKanri" render={(props) => <ZairyouKanri {...props} />}/>
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.REFERENCES} component={References} />
            <Route exact path={ROUTES.COURSE} component={Course} />
            <Route exact path="/course/:stateCourse/:id" component={DetailCourse}/>
            <Route exact path="/course/:stateCourse/:id/:typeLesson" component={Temp}/>
            {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
            <Route exact path="/" name="Home" render={(props) => <LandingPage {...props} />} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
