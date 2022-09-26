import { app } from "~/utils/realmClient.server";

export const mongoClient = app?.currentUser?.mongoClient(
  String(process.env.CLUSTER_NAME)
);
