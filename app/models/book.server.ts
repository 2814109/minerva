import { mongo } from "~/utils/mongo.server";
export const createBook = async () => {
  const collection = mongo
    ?.db(String(process.env.DATABASE_NAME))
    .collection(String(process.env.COLLECTION_NAME));

  // about $set : https://www.mongodb.com/docs/manual/reference/operator/update/set/
  const result = await collection?.insertOne(
    { $set: { favoriteColor: "purple" } } // Set the logged in user's favorite color to purple
  );
  console.log(process.env.COLLECTION_NAME);
  console.log(process.env.DATABASE_NAME);
  console.log(result);
};
