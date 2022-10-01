import { useTransition, useActionData } from "@remix-run/react";
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  json,
} from "@remix-run/node";
// import LoginedComponent from "~/componets/routes/auth/LoginedComponent";
// import SigninButton from "~/componets/routes/auth/SigninButton";
import SignInForm from "~/componets/form/SignInForm";
import { FC } from "react";
// import useRealm from "~/hooks/realmClient";
// import { SubmitHandler } from "react-hook-form";
import { createUser } from "~/models/auth.server";
import { UserDetails } from "~/types/models/UserDetails";
// import { UserDetails } from "~/types/models/UserDetails";

export const loader: LoaderFunction = async () => {
  return process.env.ATLAS_APP_SERVICE;
};

type Inputs = {
  username: string;
  email: string;
};
const SignIn: FC = () => {
  const data = useActionData();
  console.log(data);

  //   const ATLAS_APP_SERVICE = useLoaderData();

  //   const { clientRealm, register } = useRealm(ATLAS_APP_SERVICE);

  const transition = useTransition();
  const isTransition = transition.submission;

  return (
    <div className="bg-gray-200">
      <>
        {/* {currentUser ? (
            <LoginedComponent currentUser={currentUser} />
          ) : (
            //   <SigninButton />
            <SignInForm />
          )} */}
        <SignInForm errors={data} />
      </>
    </div>
  );
};

export default SignIn;

export const action: ActionFunction = async ({ request }) => {
  const errors: UserDetails = { email: "", password: "" };

  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "That doesn't look like an email address";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "Password must be > 6 characters";
  }

  if (Object.keys(errors).length) {
    return json(errors, { status: 422 });
  }

  await createUser({ email, password });
  return {};
  //   return redirect("/dashboard");
};
