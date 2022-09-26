import { FC } from "react";

import Layout from "~/componets/layout";
import { Outlet } from "@remix-run/react";

const Dashboard: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
