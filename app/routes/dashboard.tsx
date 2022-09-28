import { FC } from "react";
import { getCurrentUser } from "~/models/auth.server";
import Layout from "~/componets/layout";
import { Outlet } from "@remix-run/react";
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  if (currentUser === null) {
    console.log("#");
    return redirect("/login");
  }

  return {};
};
const Dashboard: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
