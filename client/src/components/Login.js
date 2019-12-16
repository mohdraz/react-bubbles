import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <Form>
        <Field type="text" name="username" />
        <Field type="password" name="password" />
        <button>login</button>
      </Form>
    </>
  );
};

const withFormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password | ""
    };
  },
  handleSubmit(values, { resetForm, props }) {
    axiosWithAuth()
      .post("/login", {
        username: values.username,
        password: values.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles/");
      })
      .catch(err => console.log(err.message));
  }
})(Login);
export default withFormikLogin;
