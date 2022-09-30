import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FC } from "react";
import { loginAnonymous, getCurrentUser } from "~/models/auth.server";
import { useTransition } from "@remix-run/react";
import LoginedComponent from "~/componets/routes/auth/LoginedComponent";

import LoginButton from "~/componets/routes/auth/LoginButton";

export const loader: LoaderFunction = async () => {
  const currentUser = await getCurrentUser();

  return currentUser;
};

export const action: ActionFunction = async ({ request }) => {
  const accessToken = await loginAnonymous();

  return redirect("/dashboard");
};

const App: FC = () => {
  const currentUser = useLoaderData();

  const transition = useTransition();

  const isTransition = transition.submission;
  console.log(currentUser);
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
