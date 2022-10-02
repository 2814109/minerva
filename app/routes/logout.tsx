import { ActionFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/node";
import { logout } from "~/models/auth.server";
import { getSession, destroySession } from "~/utils/sessions.server";
export const action: ActionFunction = async ({ request }) => {
  await logout();
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    return redirect("/login", {
      headers: { "Set-Cookie": await destroySession(session) },
    });
  }
  return redirect("/");
};
