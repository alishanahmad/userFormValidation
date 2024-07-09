import React from "react";
import "../styles/allStyle.css";
import { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your name"),
    email: yup.string().required("please enter your email"),
    password: yup.string().required("please create password"),
  });
  const onfinishHandler = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
      <div>
        <Link to="/" className="margin">
          Home
        </Link>
      </div>
      <div className=" form-container">
        <div className="col-md-4 text-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onfinishHandler}
          >
            <Form className="card">
              <h1 className="col-md-12">Login Here</h1>
              <div className="col-md-12 mt-4">
                <Field
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <p>
                Already User
                <Link to="/login" className="margin">
                  Login
                </Link>
                here
              </p>
              <button className="btn btn-primary" type="submit">
                Signup
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
