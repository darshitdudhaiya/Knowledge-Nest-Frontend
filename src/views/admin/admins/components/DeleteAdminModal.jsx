import React from "react";
import { deleteAdminAsync } from "services/Admins/AdminServices";

const DeleteAdminModal = ({ isOpen, onClose, id }) => {
    const handleDelete = async () => {
        let response = {}
        try {
            response = await deleteAdminAsync(id);
        } catch (error) {
            console.log(error.message);
        }
        onClose();
    }
  return (
    <div
      className={`fixed top-0  right-0 bottom-0 left-0 z-50 flex min-h-screen w-full items-center justify-center overflow-y-auto bg-[#000000] bg-opacity-50 transition duration-150 ease-in-out lg:h-screen ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative flex items-center justify-center py-2 md:mx-4 lg:h-screen lg:w-6/12">
        <div className="relative h-auto bg-white bg-clip-border p-4 text-gray-700 shadow-md">
            <div className="grid grid-cols-1 gap-x-[100px] space-x-6 gap-y-6 md:grid-cols-3">
            <div className="mb-1">
                <span className="font-semibold text-lg">
                  Are You Sure?
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-x-3">
              <button
                type="button"
                onClick={() => handleDelete()}
                className="flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490] hover:text-white focus:outline-none focus:ring-0"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded border bg-white py-2 px-5 font-bold text-[#10375e] hover:border-[#10375e] focus:outline-none focus:ring-0"
              >
                Cancel
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAdminModal;
