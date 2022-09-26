import { FC } from "react";
import { Form } from "@remix-run/react";

const LoginButton: FC = () => {
  return (
    <Form method="post">
      <button type="submit">Sgin In</button>
    </Form>
  );
};

export default LoginButton;
