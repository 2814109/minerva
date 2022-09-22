import { FC, lazy, Suspense } from "react";
const OtherComponent = lazy(() => import("~/componets/suspense/index"));

const Main: FC = () => (
  <Suspense fallback={<p>Loading...!!!!!</p>}>
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <OtherComponent />
    </div>
  </Suspense>
);
export default Main;
