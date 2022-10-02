import { FC } from "react";
import Layout from "~/componets/layout";
import { Outlet } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
export const loader: LoaderFunction = async ({ request }) => {
  // const session = await getSession(request.headers.get("Cookie"));
  // if (!session.has("access_token")) {
  //   return redirect("/login");
  // }
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
