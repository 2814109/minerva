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

export const getCurrentUser = async () => {
  const currentUser = app.currentUser;

  return currentUser;
};

// export const isValidateAccessToken = (accessToken:string) => {
// app
// }

export const logout = async () => {
  console.log("#logout");
  const result = await app.currentUser?.logOut();

  console.log("response " + result);
};
