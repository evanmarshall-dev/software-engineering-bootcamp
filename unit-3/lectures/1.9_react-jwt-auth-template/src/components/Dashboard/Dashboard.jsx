// This component will eventually show a list of all the users that have created accounts in our application. For now though, let’s display a message that welcomes the user by their username. This means we’ll need to import the UserContext and use the useContext() hook to access the user context.
// Let’s make the Dashboard component useful by fetching some data from the server. We’ll need to authenticate this request with a JWT. This is because the server will only respond with the data if the request includes a valid token. The server will not respond with the requested data without the token.

import { useEffect, useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import * as userService from "../../services/userService";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        console.log(fetchedUsers);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) fetchUsers();
  }, [user]);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
    </main>
  );
};

export default Dashboard;
