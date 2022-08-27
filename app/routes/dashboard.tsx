import { FC } from "react";
import Layout from "~/componets/layout";
import { Outlet } from "@remix-run/react";

const Dashboard: FC = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default Dashboard;
