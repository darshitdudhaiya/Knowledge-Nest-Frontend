import React from "react";

const ViewAdminModal = ({ isOpen, onClose, data }) => {
  return (
    <div
      className={`fixed top-0  right-0 bottom-0 left-0 z-50 flex min-h-screen w-full items-center justify-center overflow-y-auto bg-[#000000] bg-opacity-50 transition duration-150 ease-in-out lg:h-screen ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative flex items-center justify-center py-2 md:mx-4 lg:h-screen lg:w-6/12">
        <div className="relative h-auto bg-white bg-clip-border p-4 text-gray-700 shadow-md">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold uppercase dark:text-gray-800">
              Admin
            </h1>
          </div>
          <form className="mb-1 px-4 pt-6 pb-3">
            <div className="grid grid-cols-1 gap-x-[100px] space-x-6 gap-y-6 md:grid-cols-3">
              {/* email */}
              <div className="mb-1">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Email
                </label>
                <span className="font-semibold text-lg">
                  {data && data.Email}
                </span>
              </div>
              {/* name */}
              <div className="mb-1">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Name
                </label>
                <span className="font-semibold text-lg">
                  {data && data.Name}
                </span>
              </div>
              {/* gender */}
              <div className="mb-1">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Gender
                </label>
                <span className="font-semibold text-lg">
                  {data && data.Gender}
                </span>
              </div>
              {/* contact */}
              <div className="mb-1">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Contact
                </label>
                <span className="font-semibold text-lg">
                  {data && data.Contact}
                </span>
              </div>
              {/* address */}
              <div className="mb-1">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Address
                </label>
                <span className="font-semibold text-lg">
                  {data && data.Address}
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-x-3">
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490] hover:text-white focus:outline-none focus:ring-0"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewAdminModal;
