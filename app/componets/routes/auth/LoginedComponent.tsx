import { FC } from "react";
import { Form } from "@remix-run/react";

type Props = {
  currentUser: Realm.User;
};

const LogoutButton: FC = () => {
  return (
    <Form method="post" action="/logout">
      <button type="submit">Log out</button>
    </Form>
  );
};
const UserDetail: FC<{ user: Realm.User }> = ({ user }) => {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
};
// Create a component that lets an anonymous user log in

const LoginedComponent: FC<Props> = ({ currentUser }) => {
  return (
    <>
      <UserDetail user={currentUser} />
      <LogoutButton />
    </>
  );
};

export default LoginedComponent;
