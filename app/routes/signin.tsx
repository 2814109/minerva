import { useTransition } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import LoginedComponent from "~/componets/routes/auth/LoginedComponent";
import SigninButton from "~/componets/routes/auth/SigninButton";
import SignInForm from "~/componets/form/SignInForm";
import { FC, FormEvent } from "react";
import useRealm from "~/hooks/realmClient";
import { SubmitHandler } from "react-hook-form";
import { createUser } from "~/models/auth.server";
export const loader: LoaderFunction = async () => {
  return process.env.ATLAS_APP_SERVICE;
};

type Inputs = {
  username: string;
  email: string;
};
const SignIn: FC = () => {
  const ATLAS_APP_SERVICE = useLoaderData();

  const { clientRealm, register } = useRealm(ATLAS_APP_SERVICE);

  const handleSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log("#");
    console.log(formData);
  };
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
          <SignInForm handleSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
};

export default SignIn;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  await createUser({ email, password });
  return {};
  //   return redirect("/dashboard");
};
