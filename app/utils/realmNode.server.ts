import * as Realm from "realm";

const {
  BSON: { ObjectId },
} = Realm;

const config = {
  id: String(process.env.ATLAS_APP_SERVICE),
};

export const app = new Realm.App(config);
