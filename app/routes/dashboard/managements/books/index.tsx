import { ActionFunction, redirect } from "@remix-run/node";
import { FC } from "react";
import { createBook } from "~/models/book.server";
import { Form } from "@remix-run/react";

export const action: ActionFunction = async () => {
  await createBook();

  return redirect("/dashboard/managements/books");
};
const Book: FC = () => {
  return (
    <>
      <h1>Book</h1>

      <Form method="post">
        <button type="submit">create</button>
      </Form>
    </>
  );
};

export default Book;
