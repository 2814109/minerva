import * as Realm from "realm-web";

export const app = new Realm.App({
  id: String(process.env.ATLAS_APP_SERVICE),
});
