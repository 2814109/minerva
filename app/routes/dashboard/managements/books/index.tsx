import { ActionFunction, redirect } from "@remix-run/node";
import { FC, useState } from "react";
import { createBook } from "~/models/book.server";
import BookForm from "~/componets/form/BookForm";
export const action: ActionFunction = async () => {
  await createBook();
  return redirect("/dashboard/managements/books");
};
const Book: FC = () => {
  return (
    <>
      <h1>Book</h1>

      <BookForm />
    </>
  );
};

export default Book;
