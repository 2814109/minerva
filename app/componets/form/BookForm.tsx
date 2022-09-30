import { FC, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Form } from "@remix-run/react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type FormItems = {
  items: { text: string }[];
};

const BookForm: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const closeModal = () => {
    setShowModal(false);
  };

  const { control, register } = useForm<FormItems>({
    defaultValues: { items: [{ text: "test" }] },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "items", // unique name for your Field Array
    }
  );

  const addItem = () => {
    append({ text: "add" });
  };

  return (
    <Modal style={customStyles} isOpen={showModal}>
      <Form>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Book Tile
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value=""
              />
            </div>
          </div>
        </div>

        {fields.map((field, index) => (
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Chapter
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  key={field.id} // important to include key with field's id
                  {...register(`items.${index}.text`)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button name="add item" onClick={() => addItem()}>
            add
          </button>
        </div>

        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            登録する
          </button>

          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => closeModal()}
          >
            閉じる
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default BookForm;
