import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

import { FC } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  const sectionId = params.sectionId;

  return sectionId;
};
const SectionShow: FC = () => {
  const sectionId = useLoaderData();
  return <>{sectionId}</>;
};
export default SectionShow;
