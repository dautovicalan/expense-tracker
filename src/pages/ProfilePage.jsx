import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Avatar } from "@mui/material";
import styles from "../styles/ProfileStyles.module.css";
import { useRef } from "react";
import axios from "axios";

const changePasswordUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCwnDEANkIRujjiwyyG_6q89xH-U-no7js";

const ProfilePage = () => {
  const { isLoggedIn } = useContext(DataContext);
  console.log(isLoggedIn);

  const newPassword = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredPassword = newPassword.current.value;
    console.log(isLoggedIn.idToken);
    const response = await axios
      .post(changePasswordUrl, {
        idToken: isLoggedIn.idToken,
        password: enteredPassword,
        returnSecureToken: false,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data.error.message));
    console.log(response);
  };

  return (
    <React.Fragment>
      <div className={styles.profile_container}>
        <Avatar
          alt="Marosini test"
          src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
          sx={{ height: "200px", width: "200px" }}
        />
        <h1>
          EMAIL: <span>{isLoggedIn.email}</span>
        </h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="changePassword">Change Password</label>
          <input
            type="password"
            placeholder="New Password"
            id="changePassword"
            required
            minLength="7"
            ref={newPassword}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
