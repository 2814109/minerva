import { useTransition } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import LoginedComponent from "~/componets/routes/auth/LoginedComponent";
import SigninButton from "~/componets/routes/auth/SigninButton";
import SignInForm from "~/componets/form/SignInForm";
import { FC } from "react";
import useRealm from "~/hooks/realmClient";
export const loader: LoaderFunction = async () => {
  return process.env.ATLAS_APP_SERVICE;
};

export const action: ActionFunction = async ({ request }) => {
  return redirect("/dashboard");
};

const SignIn: FC = () => {
  const ATLAS_APP_SERVICE = useLoaderData();

  const { clientRealm } = useRealm(ATLAS_APP_SERVICE);
  console.log(clientRealm);

  const transition = useTransition();
  const isTransition = transition.submission;

  return (
    <div className="bg-gray-200">
      {isTransition ? (
        <>...loading</>
      ) : (
        <>
          {/* {currentUser ? (
            <LoginedComponent currentUser={currentUser} />
          ) : (
            //   <SigninButton />
            <SignInForm />
          )} */}
          <SignInForm />
        </>
      )}
    </div>
  );
};

export default SignIn;
