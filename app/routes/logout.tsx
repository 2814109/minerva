import { ActionFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/node";
import { logout } from "~/models/auth.server";

export const action: ActionFunction = async () => {
  await logout();
  return redirect("/login");
};
