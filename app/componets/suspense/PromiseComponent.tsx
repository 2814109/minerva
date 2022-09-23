import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { FC, useEffect, useState } from "react";

export const loader: LoaderFunction = async () => {};

const PromiseComponent: FC = () => {
  return <h1>test</h1>;
};

export default PromiseComponent;
