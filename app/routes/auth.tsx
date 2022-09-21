import { Outlet } from "@remix-run/react";
import { FC, Suspense } from "react";
const Index: FC = () => {
  return (
    <div>
      <Suspense fallback={"!!!!!loading"}>
        <h1>test</h1>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Index;
