import React, { useEffect } from "react";
import axios from "axios";
import styles from "./users.module.css";
import WarningUser from "./WarningUser";
import { useDispatch } from "react-redux";
import { sessionActive } from "../../../redux/Actions/authAction";
import { backendUrl } from "../../../deployConfig";
import { AiFillGoogleCircle, AiFillHome } from "react-icons/ai";
import { Modal } from "../../Modal/Modal";

const Users = () => {
  const dispatch = useDispatch();
  const { user, auth } = dispatch(sessionActive());

  const [users, setUsers] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [userChange, setuserChange] = React.useState({
    id: false,
    prop: false,
    text: "",
  });

  const getAllUsers = async () => {
    if (auth) {
      try {
        const response = await axios({
          url: `${backendUrl}/user`,
          method: "get",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "refresh-token": user.refreshToken,
          },
        });

        if (response.data) {
          setUsers(response.data.data);
        }
      } catch (error) {
        console.log("error de algo", error);
      }
    }
  };

  useEffect(() => {
    getAllUsers();
    return setUsers(false);
  }, []);

  const onClick = (id, prop, text) => {
    setOpenModal(true);
    setuserChange({
      id,
      prop,
      text,
    });
  };

  return (
    <>
      <h2>Clientes y usuarios registrados en Market Zone</h2>
      {!users ? (
        <section className={styles["container-loader"]}>
          <div className={styles["loader"]}></div>
        </section>
      ) : (
        <section className={styles["users-table"]}>
          <table className={styles["user-table"]}>
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Email</th>
                <th>Proveedor</th>
                <th>Rol</th>
                <th>Activado</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user["_id"]}>
                  <td>{`${user.name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.provider === "google" ? (
                      <AiFillGoogleCircle />
                    ) : (
                      <AiFillHome />
                    )}
                    {user.provider}
                  </td>
                  <td>
                    <label htmlFor={`userRoleAdmin${user._id}`}>
                      <input
                        type="checkbox"
                        id={`userRoleAdmin${user._id}`}
                        name={`userRoleAdmin${user._id}`}
                        value={`userRoleAdmin${user._id}`}
                        checked={user.role.includes("admin")}
                        onChange={() =>
                          onClick(
                            user._id,
                            "admin",
                            user.role.includes("admin")
                              ? `¿Desea quitar el privilegio de ADMINISTRADOR a el usuario ${user.name} con email ${user.email}?`
                              : `¿Desea dar el privilegio de ADMINISTRADOR a el usuario ${user.name} con email ${user.email}?`
                          )
                        }
                      />
                      Admin
                    </label>
                    <label htmlFor={`userRoleCustomer${user._id}`}>
                      <input
                        type="checkbox"
                        id={`userRoleCustomer${user._id}`}
                        name={`userRoleCustomer${user._id}`}
                        value={`userRoleCustomer${user._id}`}
                        checked={user.role.includes("customer")}
                        onChange={() =>
                          onClick(
                            user._id,
                            "customer",
                            user.role.includes("customer")
                              ? `¿Desea quitar el privilegio de COMPRADOR a el usuario ${user.name} con email ${user.email}?`
                              : `¿Desea dar el privilegio de COMPRADOR a el usuario ${user.name} con email ${user.email}?`
                          )
                        }
                      />
                      Customer
                    </label>
                    <label htmlFor={`userRoleSeller${user._id}`}>
                      <input
                        type="checkbox"
                        id={`userRoleSeller${user._id}`}
                        name={`userRoleSeller${user._id}`}
                        value={`userRoleSeller${user._id}`}
                        checked={user.role.includes("seller")}
                        onChange={() =>
                          onClick(
                            user._id,
                            "seller",
                            user.role.includes("seller")
                              ? `¿Desea quitar el privilegio de VENDEDOR a el usuario ${user.name} con email ${user.email}?`
                              : `¿Desea dar el privilegio de VENDEDOR a el usuario ${user.name} con email ${user.email}?`
                          )
                        }
                      />
                      Seller
                    </label>
                  </td>
                  <td>
                    {user.active}
                    <input
                      type="checkbox"
                      id="userActive"
                      name="userActive"
                      value="Paneer"
                      checked={user.active}
                      onChange={() =>
                        onClick(
                          user._id,
                          "active",
                          user.active
                            ? `¿Desea desactivar el usuario ${user.name} con email ${user.email}?`
                            : `¿Desea activar el usuario ${user.name} con email ${user.email}?`
                        )
                      }
                    />
                    {user.active ? "Si" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      {openModal && (
        <Modal>
          <WarningUser
            setOpenModal={setOpenModal}
            setUsers={setUsers}
            users={users}
            userChange={userChange}
          />
        </Modal>
      )}
    </>
  );
};

export default Users;
