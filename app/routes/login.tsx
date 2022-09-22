import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { FC, lazy } from "react";
import { loginAnonymous, getCurrentUser } from "~/models/auth.server";
import { useTransition } from "@remix-run/react";
import LoginedComponent from "~/componets/routes/auth/LoginedComponent";

import LoginButton from "~/componets/routes/auth/LoginButton";

export const loader: LoaderFunction = async () => {
  const currentUser = await getCurrentUser();

  return currentUser;
};

export const action: ActionFunction = async ({ request }) => {
  const user = await loginAnonymous();

  console.log("user");
  console.log(user);

  return redirect("/dashboard");
};

const App: FC = () => {
  const currentUser = useLoaderData();
  // Keep the logged in Realm user in local state. This lets the app re-render
  // whenever the current user changes (e.g. logs in or logs out).
  // If a user is logged in, show their details. Otherwise, show the login screen.

  const transition = useTransition();

  const isTransition = transition.submission;

  return (
    <div className="App">
      <div className="App-header">
        {isTransition ? (
          <>...loading</>
        ) : (
          <>
            {currentUser ? (
              <LoginedComponent currentUser={currentUser} />
            ) : (
              <LoginButton />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default App;
