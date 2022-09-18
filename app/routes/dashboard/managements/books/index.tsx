import { FC, Suspense, useEffect } from "react";
import useBooks from "~/hooks/books";

// fetch index books api
// fillin for list item from fetch books

const Book: FC = () => {
  const { fetcher, statusCode, book } = useBooks();

  useEffect(() => {
    void fetcher();
  }, []);

  return (
    <>
      <h1>Book</h1>
      <Suspense fallback={"Loading..."}></Suspense>
    </>
  );
};

export default Book;
