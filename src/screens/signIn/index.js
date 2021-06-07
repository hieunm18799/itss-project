import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { NavBar } from "../../components/NavBar";
import * as ROUTES from "../../constant/routes";
import { AuthContext } from "../../services/auth";

import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../states/actions/auth";

export const SignInPage = () => {
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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          dispatch(signIn({ email: values.email, password: values.password }));
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(6, "Password must be at least 6 characters"),
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
                Đăng nhập
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
                {auth.error ? (
                  <small className="text-danger">
                    Incorrect email or password
                  </small>
                ) : null}
                <input
                  className="btn btn-dark btn-block mt-3"
                  type="submit"
                  value="Đăng nhập"
                  disabled={errors.password || errors.email}
                  style={{
                    background:
                      "linear-gradient(to bottom right, #f27a54, #a154f2)",
                    border: "none",
                  }}
                />
                <p className="mt-2">
                  Bạn chưa có tài khoản?
                  <Link to={ROUTES.SIGN_UP} className="text-decoration-none">
                    {" "}
                    Đăng ký ngay
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
