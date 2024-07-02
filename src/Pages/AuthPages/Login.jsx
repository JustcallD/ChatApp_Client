import React, { useState } from "react";
import styles from "../../Styles/Pages/AuthPages/Login.module.css";

import { Link, useNavigate } from "react-router-dom";
import { serverInstance } from "../../Api/serverInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Please enter your email");
    } else if (!value.includes("@")) {
      setEmailError("@ is missing in email,Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Please enter your password");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);

    if (email && password && email.includes("@")) {
      try {
        const response = await serverInstance.post("/login", {
          email,
          password,
        });

        if (response.status === 200) {
          localStorage.setItem("isAuth", true);
          // localStorage.setItem("userRoles", response.data.data.loginUser.role);

          // if (response.data.data.loginUser.role === "admin") {
          //   localStorage.setItem("isAdmin", true);
          // }
          setTimeout(() => {
            navigate("/");
          }, 700);
        } else {
          console.error("Login failed:", response.statusText);
        }
      } catch (error) {
        console.error("Login error:", error.message);
      }

      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`${styles.formControl} ${
              emailError && styles.isInvalid
            }`}
            style={{ borderColor: emailError ? "red" : "#ccc" }}
            title={emailError || "Enter your email"}
          />
          {emailError && <p className={styles.invalidFeedback}>{emailError}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={`${styles.formControl} ${
              passwordError && styles.isInvalid
            }`}
            style={{ borderColor: passwordError ? "red" : "#ccc" }}
            title={passwordError || "Enter your password"}
          />
          {passwordError && (
            <p className={styles.invalidFeedback}>{passwordError}</p>
          )}
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
      <Link to={"/sign-up"}>go to sign-up</Link>
    </div>
  );
};

export default Login;
