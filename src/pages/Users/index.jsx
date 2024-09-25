import "./Users.scss";
import User from "../../components/User/";
import "./reset.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=500");
    setUsers(response.data.results);
  };

  const handleDeleteUser = (email) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    const email = user.email.toLowerCase();
    const phone = user.phone.toLowerCase();
    const dobdate = user.dob.date.toLowerCase();
    const location =
      `${user.location.city}, ${user.location.country}`.toLowerCase();
    const search = searchTerm.toLowerCase();

    return (
      fullName.includes(search) ||
      email.includes(search) ||
      phone.includes(search) ||
      dobdate.includes(search) ||
      location.includes(search)
    );
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="page__users">
      <div className="header">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="search"
          placeholder="Search"
        />
        <button onClick={getUsers} className="refresh-button">
          Refresh Users
        </button>
      </div>

      <div className="container">
        <div className="list__users">
          {filteredUsers.map((user, index) => (
            <User
              key={index}
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              phone={user.phone}
              picture={user.picture.medium}
              dobdate={new Date(user.dob.date).toLocaleDateString()}
              location={`${user.location.city}, ${user.location.country}`}
              onDelete={handleDeleteUser}
            />
          ))}
        </div>
        <div className="list"></div>
      </div>
    </div>
  );
};

export default Users;
