import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serverInstance } from "../../Api/serverInstance";

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching users from an API or database
    const fetchUsers = async () => {
      try {
        // Replace with actual API call to fetch users
        const response = await serverInstance.get("all-users");

        const data = await response.data;
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div
      style={{
        flexGrow: 0.4,
        backgroundColor: "lightgray",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid black",
          paddingBottom: "10px",
        }}
      >
        <h3 style={{ margin: 0 }}>UserListComponent</h3>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "4px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {users &&
          users.map((user) => (
            <div key={user._id} style={{ marginBottom: "8px" }}>
              <Link
                to={`/${user._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <strong>{user.username}</strong>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserListComponent;

// flexGrow: 1,
