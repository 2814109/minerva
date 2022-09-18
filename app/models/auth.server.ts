import { app } from "~/utils/realmClient.server";

export const loginAnonymous = async () => {
  const user: Realm.User = await app.logIn(Realm.Credentials.anonymous());
  return user;
};

export const getCurrentUser = async () => {
  const currentUser = app.currentUser;

  return currentUser;
};
