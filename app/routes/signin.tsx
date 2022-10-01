import { useActionData, useTransition } from "@remix-run/react";
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  json,
} from "@remix-run/node";
import SignInForm from "~/componets/form/SignInForm";
import { FC } from "react";
import { createUser } from "~/models/auth.server";
import Spinner from "~/componets/Spinner";
export const loader: LoaderFunction = async () => {
  return process.env.ATLAS_APP_SERVICE;
};

const SignIn: FC = () => {
  const errors = useActionData();
  const transition = useTransition();

  return (
    <>
      {transition.submission ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="bg-gray-200">
          <SignInForm errors={errors} />{" "}
        </div>
      )}
    </>
  );
};

export default SignIn;

export const action: ActionFunction = async ({ request }) => {
  const errors: any = {};

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

  await createUser({ email, password }).catch((error) => console.log(error));
  return redirect("/login");
};
