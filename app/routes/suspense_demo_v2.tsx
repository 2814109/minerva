import { FC, Suspense } from "react";
import PromiseComponent from "~/componets/suspense/PromiseComponent";

const SuspenseDemoV2: FC = () => {
  return (
    <Suspense fallback={"loading!!!!"}>
      <PromiseComponent />
    </Suspense>
  );
};

export default SuspenseDemoV2;
