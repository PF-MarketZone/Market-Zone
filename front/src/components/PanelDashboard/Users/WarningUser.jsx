import React from "react";
import styles from "./WarningUser.module.css";
import axios from "axios";
import { backendUrl } from "../../../deployConfig";
import { useDispatch } from "react-redux";
import { sessionActive } from "../../../redux/Actions/authAction";

const WarningUser = ({ setOpenModal, setUsers, users, userChange }) => {
  const dispatch = useDispatch();
  const { user } = dispatch(sessionActive());

  const handlerActivatedUser = async (id, prop, answer) => {
    if (answer && prop === "active") {
      let userUpdate = {};
      const updatedUsers = users?.map((user) => {
        if (user._id === id) {
          userUpdate = { ...user, [prop]: !user[prop] };
          return userUpdate;
        }
        return user;
      });

      try {
        const response = await axios({
          url: `${backendUrl}/user/modify`,
          method: "post",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "refresh-token": user.refreshToken,
          },
          data: {
            _id: userChange.id,
            [prop]: true,
          },
        });

        if (response.data) {
          setUsers(updatedUsers);
        }
      } catch (error) {
        console.log("error de algo", error);
      }
    } else if (answer) {
      let userUpdate = {};
      const updatedUsers = users?.map((user) => {
        if (user._id === id) {
          if (!user.role.includes(prop)) {
            user.role.push(prop);
            userUpdate = { ...user, role: user.role };
            return userUpdate;
          } else {
            const filterRole = user.role.filter((rol) => rol !== prop);
            userUpdate = { ...user, role: filterRole };
            return userUpdate;
          }
        }
        return user;
      });

      try {
        const roles = [
          { admin: "64e550fe0498e3825c3a87e1" },
          { customer: "64e550fe0498e3825c3a87e2" },
          { seller: "64e550fe0498e3825c3a87e3" },
        ];

        const userRole = userUpdate.role;

        const userRoleId = userRole.map((role) => {
          const roleObject = roles.find((rol) => rol.hasOwnProperty(role));
          return roleObject ? roleObject[role] : null;
        });

        const response = await axios({
          url: `${backendUrl}/user/modify`,
          method: "post",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "refresh-token": user.refreshToken,
          },
          data: {
            _id: id,
            role: userRoleId,
          },
        });

        if (response.data) {
          setUsers(updatedUsers);
        }
      } catch (error) {
        console.log("error de algo", error);
      }
    }

    setOpenModal(false);
  };

  return (
    <section className={styles["container"]}>
      <h3>{userChange.text}</h3>
      <button
        className={styles["container-btn"]}
        onClick={() =>
          handlerActivatedUser(userChange.id, userChange.prop, true)
        }
      >
        Si
      </button>

      <button
        className={styles["container-btn"]}
        onClick={() =>
          handlerActivatedUser(userChange.id, userChange.prop, false)
        }
      >
        No
      </button>
    </section>
  );
};

export default WarningUser;
