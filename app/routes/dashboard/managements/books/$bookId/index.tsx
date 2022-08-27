import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

import { FC } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  const bookId = params.bookId;

  return bookId;
};
const BookShow: FC = () => {
  const bookId = useLoaderData();
  return <>{bookId}</>;
};
export default BookShow;
