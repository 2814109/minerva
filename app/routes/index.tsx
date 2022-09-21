import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

import { FC } from "react";
import { loginAnonymous, getCurrentUser } from "~/models/auth.server";
import { useTransition } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const currentUser = await getCurrentUser();
  console.log("current user");
  console.log(currentUser);
  return currentUser;
};

export const action: ActionFunction = async ({ request }) => {
  const user = await loginAnonymous();

  console.log("user");
  console.log(user);

  return redirect("/");
};

const UserDetail = ({ user }: { user: Realm.User }) => {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
};
// Create a component that lets an anonymous user log in

const LoginButton: FC = () => {
  return (
    <Form method="post">
      <button type="submit">Log In</button>
    </Form>
  );
};

const App: FC = () => {
  const currentUser = useLoaderData();
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  // If a user is logged in, show their details. Otherwise, show the login screen.

  const actionData = useActionData();
  const transition = useTransition();

  const isTransition = transition.submission;

  return (
    <div className="App">
      <div className="App-header">
        {currentUser ? (
          <UserDetail user={currentUser} />
        ) : isTransition ? (
          <>...loading</>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};
export default App;
