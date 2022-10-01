import { useActionData } from "@remix-run/react";
import { ActionFunction, redirect, json } from "@remix-run/node";
import AuthForm from "~/componets/form/AuthForm";
import { FC } from "react";
import { loginUser } from "~/models/auth.server";

const Login: FC = () => {
  const errors = useActionData();

  return <AuthForm errors={errors} role={"login"} />;
};

export default Login;

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

  const accessToken = await loginUser({ email, password });
  console.log(accessToken);
  return redirect("/dashboard");
};
