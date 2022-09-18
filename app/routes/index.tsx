import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FC, useState } from "react";
import { loginAnonymous, getCurrentUser } from "~/models/auth.server";

export const loader: LoaderFunction = async () => {
  const currentUser = getCurrentUser();
  return { currentUser };
};

const UserDetail = ({ user }: { user: Realm.User }) => {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
};
// Create a component that lets an anonymous user log in

const Login: FC = () => {
  return <button onClick={loginAnonymous}>Log In</button>;
};

const App: FC = () => {
  const { currentUser } = useLoaderData();
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  const [user, setUser] = useState<Realm.User | null>(currentUser);
  // If a user is logged in, show their details. Otherwise, show the login screen.
  return (
    <div className="App">
      <div className="App-header">
        {user ? <UserDetail user={user} /> : <Login />}
      </div>
    </div>
  );
};
export default App;
