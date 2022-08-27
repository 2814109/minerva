import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

import { FC } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  const chapterId = params.chapterId;

  return chapterId;
};
const ChapterShow: FC = () => {
  const chapterId = useLoaderData();
  return <>{chapterId}</>;
};
export default ChapterShow;
