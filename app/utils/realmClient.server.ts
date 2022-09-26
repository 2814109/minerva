import * as Realm from "realm-web";

const {
  BSON: { ObjectId },
} = Realm;

export const app = new Realm.App({
  id: String(process.env.ATLAS_APP_SERVICE),
});
