import { LoaderFunction, redirect } from "@remix-run/node";
import { getIsLoggedIn } from "~/models/auth.server";
export const loader: LoaderFunction = async () => {
  return (await getIsLoggedIn()) ? redirect("/dashboard") : redirect("/login");
};
