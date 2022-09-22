import { FC, Suspense } from "react";
import { useTransition } from "@remix-run/react";

import Layout from "~/componets/layout";
import { Outlet } from "@remix-run/react";

const Dashboard: FC = () => {
  const transition = useTransition();
  const isTransition = transition.submission;
  return (
    <>
      {isTransition ? (
        <>loading</>
      ) : (
        <Layout>
          <Outlet />
        </Layout>
      )}
    </>
  );
};

export default Dashboard;
