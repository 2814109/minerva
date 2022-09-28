import { ActionFunction, redirect } from "@remix-run/node";
import { FC, useState } from "react";
import { createBook } from "~/models/book.server";
import BookForm from "~/componets/form/BookForm";
export const action: ActionFunction = async () => {
  await createBook();
  return redirect("/dashboard/managements/books");
};
const Book: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <h1>Book</h1>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        create
      </button>

      {isOpen && (
        <>
          <h1>open</h1>
          <BookForm />
        </>
      )}
    </>
  );
};

export default Book;
