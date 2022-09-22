import { FC } from "react";
import { Form } from "@remix-run/react";

const LogoutButton: FC = () => {
  return (
    <Form method="post" action="/logout">
      <button type="submit">Log out</button>
    </Form>
  );
};

const Header: FC = () => (
  <div className=" bg-blue-600 text-white px-4 py-2">
    <div className="flex items-center justify-between">
      <ul className="h-10 flex gap-10 items-center">
        <li className="mr-5">Header Icon</li>
        <li>Management</li>
        <li>Library</li>
        <li>Analysis</li>
      </ul>
      <div className="px-5">
        <LogoutButton />
      </div>
    </div>
  </div>
);

export default Header;
