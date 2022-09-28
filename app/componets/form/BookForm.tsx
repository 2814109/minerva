import { FC, useState } from "react";
import { useForm } from "react-hook-form";
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
const BookForm: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const deleteAction = async () => {};

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteAction = () => {
    deleteAction();
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <Modal style={customStyles} isOpen={showModal}>
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3
          className="text-lg leading-6 font-medium text-gray-900"
          id="modal-title"
        >
          削除しますか？
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            削除するともとに戻せません。すでに登録されているユーザへの影響を確認して慎重に操作してください。
            <br />
            本当に削除しますか？
          </p>
        </div>
      </div>
      <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleDeleteAction}
        >
          削除する
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleCloseModal}
        >
          削除しない
        </button>
      </div>
    </Modal>
    // <div classNameName="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    //   <div classNameName="relative p-4 w-full max-w-2xl h-full md:h-auto">
    //     <Form
    //       method="post"
    //       classNameName="relative bg-white rounded-lg shadow dark:bg-gray-700"
    //     >
    //       <h1>test</h1>
    //       <label>
    //         <input type="text" />
    //       </label>
    //     </Form>
    //   </div>
    // </div>
  );
};

export default BookForm;
