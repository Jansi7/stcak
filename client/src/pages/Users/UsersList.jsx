import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../actions/users";
import User from "./User";
import "./Users.css";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.usersReducer);
  // const users = JSON.parse(localStorage.getItem("Profile"));
  // console.log(users);
  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;
