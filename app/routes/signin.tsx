import { useTransition } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { loginAnonymous, getCurrentUser } from "~/models/auth.server";
import LoginedComponent from "~/componets/routes/auth/LoginedComponent";
import SigninButton from "~/componets/routes/auth/SigninButton";

import { FC } from "react";

export const loader: LoaderFunction = async () => {
  const currentUser = await getCurrentUser();

  return currentUser;
};

export const action: ActionFunction = async ({ request }) => {
  await loginAnonymous();

  return redirect("/dashboard");
};

const SignIn: FC = () => {
  const currentUser = useLoaderData();

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
              <SigninButton />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
