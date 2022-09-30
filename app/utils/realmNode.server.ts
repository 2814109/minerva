import Realm from "realm";

const {
  BSON: { ObjectId },
} = Realm;

export const app = new Realm.App({
  id: String(process.env.ATLAS_APP_SERVICE),
});

const authenticate = new Realm.Auth.EmailPasswordAuth();
authenticate.confirmUser({ token: "", tokenId: "" });
