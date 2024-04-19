import React, { useState, useEffect } from 'react';


const Form = ({ title, rowsAndColumns, fields, onInputChange, onSubmit, isOpen, onClose, fetchOptionsUrls }) => {
    // const numRows = Math.ceil(fields.length / 3);
    // const rows = Array.from({ length: numRows }, (_, index) => fields.slice(index * 3, (index + 1) * 3));
    const generateRows = () => {
        const generatedRows = [];
        let currentIndex = 0;

        for (const columns of rowsAndColumns) {
            const rowFields = fields.slice(currentIndex, currentIndex + columns);
            generatedRows.push(rowFields);
            currentIndex += columns;
        }

        return generatedRows;
    };

    const rows = generateRows();


    const [formData, setFormData] = useState({});
    const [selectOptions, setSelectOptions] = useState({});

    useEffect(() => {
        // Fetch options for select fields from the provided URLs
        const fetchOptions = async (url, name) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setSelectOptions((prevOptions) => ({
                    ...prevOptions,
                    [name]: data,
                }));
            } catch (error) {
                console.error(`Error fetching options for ${name}:`, error);
            }
        };

        // Fetch options for select fields
        fetchOptionsUrls.forEach(({ url, name }) => {
            fetchOptions(url, name);
        });
    }, [fetchOptionsUrls]); // Run effect whenever fetchOptionsUrls changes

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // If the changed field is Stream, clear the selections for subsequent fields
        if (name === 'stream') {
            setFormData((prevData) => ({
                ...prevData,
                year: '',
                semester: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, you can pass formData to onSubmit callback
        onSubmit(formData);
    };
    return (
        <>
            <div
                className={`w-full min-h-screen lg:h-screen bg-[#000000] bg-opacity-50 transition duration-150 ease-in-out z-50 fixed overflow-y-auto top-0 right-0 bottom-0 left-0 ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className="relative lg:mx-auto md:mx-4 flex items-center justify-center lg:w-4/6 lg:h-screen py-2">
                    <div className="h-auto relative bg-clip-border text-gray-700 bg-white shadow-md p-4">
                        <div className="flex justify-center">
                            <h1 className="font-bold uppercase text-3xl dark:text-gray-800">
                                {title}
                            </h1>
                        </div>
                        <form className=" px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                            {rows.map((row, rowIndex) => (
                                <div key={rowIndex} className="-mx-3 md:flex mb-6">
                                    {row.map((field, index) => (
                                        <div key={index} className="md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor={field.id || `grid-${field.name}`}>
                                                {field.label || 'Field Name'}
                                            </label>
                                            {field.fileType === 'select' ? (
                                                <select
                                                    className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${field.border || 'border-grey-lighter'
                                                        } rounded py-3 px-4`}
                                                    id={field.id || `grid-${field.name}`}
                                                    name={field.name}
                                                    onChange={handleInputChange}
                                                    value={formData[field.name] || ''}
                                                >
                                                    <option value="" disabled>
                                                        Select {field.label || 'Option'}
                                                    </option>
                                                    {selectOptions[field.name] &&
                                                        selectOptions[field.name].map((option) => (
                                                            <option key={option.Id} value={option.Id}>
                                                                {option.Name}
                                                            </option>
                                                        ))}
                                                </select>
                                            ) : field.fileType === 'file' ? (
                                                <input
                                                    className={`block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                                                    file:bg-gray-50 file:border-0
                                                    file:me-4
                                                    file:p-4
                                                    dark:file:bg-gray-700 dark:file:text-gray-400 border ${field.border || 'border-grey-lighter'} rounded`}
                                                    id={field.id || `grid-${field.name}`}
                                                    type={field.fileType}
                                                    name={field.name}
                                                    onChange={onInputChange}
                                                />
                                            ) : field.fileType === 'date' ? (
                                                <input
                                                    className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${field.border || 'border-grey-lighter'} rounded py-3 px-4`}
                                                    id={field.id || `grid-${field.name}`}
                                                    type="date"
                                                    name={field.name}
                                                    onChange={onInputChange}
                                                />
                                            ) : (
                                                <input
                                                    className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${field.border || 'border-grey-lighter'} rounded py-3 px-4`}
                                                    id={field.id || `grid-${field.name}`}
                                                    type={field.fileType}
                                                    name={field.name}
                                                    placeholder={field.placeholder || `Enter ${field.label}`}
                                                    onChange={onInputChange}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className="mt-4 flex justify-end gap-x-3">
                                <button type="submit" className="bg-[#10375e] hover:bg-[#185490] flex items-center justify-center text-white font-semibold hover:text-white py-2 px-4 border  rounded focus:outline-none focus:ring-0">Add</button>
                                <button type="button" onClick={onClose} class="bg-white text-[#10375e] font-bold  py-2 px-5 border hover:border-[#10375e] rounded focus:outline-none focus:ring-0">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form