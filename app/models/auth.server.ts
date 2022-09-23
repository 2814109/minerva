import { app } from "~/utils/realmClient.server";
import * as Realm from "realm-web";

export const loginAnonymous = async () => {
  const credentials = Realm.Credentials.anonymous();
  const user: Realm.User = await app.logIn(credentials);
  return user;
};

export const getCurrentUser = async () => {
  const currentUser = app.currentUser;

  return currentUser;
};

export const logout = async () => {
  console.log("#logout");
  const result = await app.currentUser?.logOut();

  console.log("response " + result);
};
