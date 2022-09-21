import { FC } from "react";
import { Form } from "@remix-run/react";

const LoginButton: FC = () => {
  return (
    <Form method="post">
      <button type="submit">Log In</button>
    </Form>
  );
};

export default LoginButton;
