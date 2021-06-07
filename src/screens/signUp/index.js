import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { NavBar } from "../../components/NavBar";
import * as ROUTES from "../../constant/routes";
import { AuthContext } from "../../services/auth";

import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../states/actions/auth";

export const SignUpPage = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);

  if (currentUser) return <Redirect to={ROUTES.COURSE} />;

  return (
    <>
      <NavBar
        style={{ backgroundColor: "#fff", color: "#000", outlineColor: "#000" }}
      />
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => {
          dispatch(signUp({ email: values.email, password: values.password }));
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(6, "Password must be at least 6 characters"),
          confirmPassword: Yup.string()
            .required("Required")
            .min(6, "Password must be at least 6 characters")
            .test(
              "Passwords match",
              "Confirm Password & Password must be same",
              function (value) {
                return this.parent.password === value;
              }
            ),
        })}
      >
        {(props) => {
          const {
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form
              className="card bg-transparent text-dark mx-auto"
              style={{ maxWidth: "21rem", top: "120px" }}
              onSubmit={handleSubmit}
            >
              <div
                className="card-header text-center"
                style={{ fontSize: "30px" }}
              >
                Đăng ký
              </div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={
                      errors.email && touched.email
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ borderRadius: "10px" }}
                  />
                  {errors.email && touched.email ? (
                    <small className="text-danger">{errors.email}</small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="mt-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={
                      errors.password && touched.password
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    placeholder="Enter password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ borderRadius: "10px" }}
                  />
                  {errors.password && touched.password ? (
                    <small className="text-danger">{errors.password}</small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="mt-2" htmlFor="password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    placeholder="Confirm password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ borderRadius: "10px" }}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <small className="text-danger">
                      {errors.confirmPassword}
                    </small>
                  ) : null}
                </div>
                {auth.error ? (
                  <small className="text-danger">
                    Email has already exists
                  </small>
                ) : null}
                <input
                  className="btn btn-dark btn-block mt-3"
                  type="submit"
                  value="Đăng ký"
                  disabled={
                    errors.password || errors.email || errors.confirmPassword
                  }
                  style={{
                    background:
                      "linear-gradient(to bottom right, #f27a54, #a154f2)",
                    border: "none",
                  }}
                />
                <p className="mt-2">
                  Bạn đã có tài khoản?
                  <Link to={ROUTES.SIGN_IN} className="text-decoration-none">
                    {" "}
                    Đăng nhập ngay
                  </Link>
                </p>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
