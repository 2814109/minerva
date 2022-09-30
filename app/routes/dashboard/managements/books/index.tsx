import { ActionFunction, redirect } from "@remix-run/node";
import { FC, useState } from "react";
import { createBook } from "~/models/book.server";
import BookForm from "~/componets/form/BookForm";
export const action: ActionFunction = async () => {
  await createBook();
  return redirect("/dashboard/managements/books");
};
const Book: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const mutateModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <h1>Book</h1>
      <button onClick={mutateModal}>Open</button>

      <BookForm showModal={showModal} mutateModal={mutateModal} />
    </>
  );
};

export default Book;
