import { FC, Suspense } from "react";

import Layout from "~/componets/layout";
import { Outlet } from "@remix-run/react";

const Dashboard: FC = () => {
  return (
    <Suspense fallback={"loading"}>
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  );
};

export default Dashboard;
