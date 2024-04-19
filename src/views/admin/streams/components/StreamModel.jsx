

const AddStream = ({ title, isOpen, onClose }) => {

    return (
        <div
            className={`w-full min-h-screen  flex justify-center items-center lg:h-screen bg-[#000000] bg-opacity-50 transition duration-150 ease-in-out z-50 fixed overflow-y-auto top-0 right-0 bottom-0 left-0 ${isOpen ? "block" : "hidden"
                }`}
        >
            <div className="relative md:mx-4 flex items-center justify-center lg:w-6/12 lg:h-screen py-2">
                <div className="h-auto relative bg-clip-border text-gray-700 bg-white shadow-md p-4">
                    <div className="flex justify-center">
                        <h1 className="font-bold uppercase text-3xl dark:text-gray-800">
                            {title}
                        </h1>
                    </div>
                    <form className="px-8 pt-6 pb-8 mb-4">  
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-6/12 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Enter Email</label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="email" name="email" placeholder="Enter Email" />
                            </div>
                            <div className="md:w-6/12 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Select Stream</label>
                                <select
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    name="stream"
                                >
                                    <option value="">Select Stream</option>
                                    <option value="BCA" >BCA</option>
                                    <option value="BCA" >BCA</option>
                                    <option value="BCA" >BCA</option>
                                </select>
                            </div>
                            <div className="md:w-6/12 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Select Year</label>
                                <select
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    name="year"
                                >
                                    <option value="">Select Year</option>
                                    <option value="" >F.Y</option>
                                    <option value="" >F.Y</option>
                                    <option value="" >F.Y</option>
                                </select>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Select Semester</label>
                                <select
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    name="year"
                                >
                                    <option value="">Select Semester</option>
                                    <option value="" >1</option>
                                    <option value="" >2</option>
                                    <option value="" >3</option>
                                </select>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Select Class</label>
                                <select
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    name="year"
                                >
                                    <option value="">Select Class</option>
                                    <option value="" >A</option>
                                    <option value="" >A</option>
                                    <option value="" >A</option>
                                </select>
                            </div>
                            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Enter Number</label>
                                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="number" name="number" placeholder="Enter Enter Number" />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-x-3">
                            <button type="submit" className="bg-[#10375e] hover:bg-[#185490] flex items-center justify-center text-white font-semibold hover:text-white py-2 px-4 border  rounded focus:outline-none focus:ring-0">Add</button>
                            <button type="button" onClick={onClose} class="bg-white text-[#10375e] font-bold  py-2 px-5 border hover:border-[#10375e] rounded focus:outline-none focus:ring-0">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddStream;