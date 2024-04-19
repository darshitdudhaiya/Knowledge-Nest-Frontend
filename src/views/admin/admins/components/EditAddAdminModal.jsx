import React from "react";
import { addAdminAsync } from "services/Admins/AdminServices";

const EditAddAdminModal = ({ title, isOpen, onClose, data }) => {
  const dataForInsert = {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(dataForInsert);
    let response = {}
    try {
      response = await addAdminAsync(dataForInsert);
    } catch (error) {
      console.log(error.message);
    }
    onClose()
  }

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
              {title}
            </h1>
          </div>
          <form className="mb-4 px-8 pt-6 pb-8" onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3">
              {/* email */}
              <div className="mb-2">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Email
                </label>
                <input
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="email"
                  defaultValue={ data && data.Email}
                  onChange={(e) => dataForInsert["Email"] = e.target.value}
                  name="email"
                  placeholder="Enter Email"
                />
              </div>
              {/* name */}
              <div className="mb-2">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Name
                </label>
                <input
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="text"
                  onChange={(e) => dataForInsert["Name"] = e.target.value}
                  defaultValue={ data && data.Name}
                  name="email"
                  placeholder="Enter Name"
                />
              </div>
              {/* contact */}
              <div className="mb-2">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Contact
                </label>
                <input
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="tel"
                  onChange={(e) => dataForInsert["Contact"] = e.target.value}
                  defaultValue={ data && data.Contact}
                  name="contact"
                  placeholder="Enter Contact"
                />
              </div>
              {/* address */}
              <div className="mb-2">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Address
                </label>
                <input
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="text"
                  onChange={(e) => dataForInsert["Address"] = e.target.value}
                  defaultValue={ data && data.Address}
                  name="address"
                  placeholder="Enter Address"
                  />
              </div>
              {/* gender */}
              <div className="mb-2">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Gender
                </label>
                <select
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  name="gender"
                  onChange={(e) => dataForInsert["Gender"] = e.target.value}
                  value={ data && data.Gender}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-x-3">
              <button
                type="submit"
                className="flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490] hover:text-white focus:outline-none focus:ring-0"
              >
                Update/Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded border bg-white py-2 px-5 font-bold text-[#10375e] hover:border-[#10375e] focus:outline-none focus:ring-0"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAddAdminModal;
