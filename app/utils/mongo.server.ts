import { app } from "~/utils/realmNode.server";

export const mongo = app?.currentUser?.mongoClient(
  String(process.env.CLUSTER_NAME)
);
