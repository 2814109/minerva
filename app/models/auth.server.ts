import { app } from "~/utils/realmNode.server";
import * as Realm from "realm";
import { UserDetails } from "~/types/models/UserDetails";
export const loginAnonymous = async () => {
  const credentials = Realm.Credentials.anonymous();

  return (await app.logIn(credentials)).accessToken;
};

export const createUser = async (userDetails: UserDetails) => {
  await app.emailPasswordAuth.registerUser(userDetails);
};

export const loginUser = async (userDetails: UserDetails) => {
  const credentials = Realm.Credentials.emailPassword(
    userDetails.email,
    userDetails.password
  );
  return (await app.logIn(credentials)).accessToken;
};

export const getIsLoggedIn = async () => {
  const isLoggedIn = app.currentUser?.isLoggedIn;
  return isLoggedIn;
};

export const getUserId = async () => {
  return app.currentUser?.id;
};

export const logout = async () => {
  await app.currentUser?.logOut();
};
