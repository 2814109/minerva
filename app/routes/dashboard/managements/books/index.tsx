import { FC, Suspense } from "react";

// fetch index books api
// fillin for list item from fetch books

const Book: FC = () => {
  return (
    <>
      <h1>Book</h1>
      <Suspense fallback={"Loading..."}></Suspense>
    </>
  );
};

export default Book;
