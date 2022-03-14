import React from "react";

import LoginPage from "../LoginPage/LoginPage";
import { profileService } from "../../Services/Service";

const ProfilePage = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    localStorage.getItem("token") &&
      profileService("12").then((response) => {
        return setData(response.data);
      });
  }, []);

  return (
    <div>
      {localStorage.getItem("token") === null ? (
        <div>
          <h3>You need to login to Continue</h3>
          <LoginPage />
        </div>
      ) : (
        <div>
          <h3>ID: {data.id}</h3>
          <h3>Name: {data.name}</h3>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
