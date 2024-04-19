import { environment } from "environment/Environment";
import React, { useEffect, useRef, useState } from "react";
import { getSingleFacultyAssignedSubjectAsync } from "services/Assigned-Subjects/assignedSubjectServices";
import instance from "services/Instance";
import { addVideoAsync } from "services/videos/videoServices";

const FacultyAddVideo = ({ title, isOpen, onClose, fetchData }) => {
  const userId = JSON.parse(environment.userTokenDetails);
  const [subjects, setSubjects] = useState([]);

  const getSingleFacultyAssignedSubjects = async () => {
    try {
      const response = await getSingleFacultyAssignedSubjectAsync(userId.id);
      console.log(response.data);
      setSubjects(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSingleFacultyAssignedSubjects();
  }, []);
  const [form, formData] = useState({
    Title: "",
    Description: "",
    IsApproved: false,
    UserId: userId.id,
    SubjectId: 0,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    formData({ ...form, [name]: value });
  };

  const videoFileForm = new FormData();
  const videoThumbnailFileForm = new FormData();

  const videoFile = useRef(null);
  const videoThumbnailFile = useRef(null);
  const onSubmit = async () => {
    try {
      const response = await addVideoAsync(form);
      if (response.status === 201) {
        console.log(response.data.data);
        const videoId = response.data.data.id;

        videoFileForm.append("video", videoFile.current.files[0]);
        videoThumbnailFileForm.append(
          "thumbnail",
          videoThumbnailFile.current.files[0]
        );

        await instance.post(`/videos/video-file/${videoId}`, videoFileForm);

        await instance.post(
          `/videos/video-thumbnail/${videoId}`,
          videoThumbnailFileForm
        );

        // onClose();
        // alert("Video added successfully");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      fetchData();
      onClose();
    }
  };

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
          {/* Title -
                        Desription
                        VideoInput,
                        Thumbnail
                        SubjectSelction */}
          <div className="mb-4 px-8 pt-6 pb-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="mb-6">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Title
                </label>
                <input
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="text"
                  name="Title"
                  onChange={handleChange}
                  placeholder="Enter Title"
                />
              </div>
              <div className="mb-6">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Description
                </label>
                <input
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="text"
                  onChange={handleChange}
                  name="Description"
                  placeholder="Enter Description"
                />
              </div>
              <div className="mb-6">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Input Video
                </label>
                <input
                  ref={videoFile}
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="file"
                  name="video"
                />
              </div>
              <div className="mb-6">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Input Thumbnail
                </label>
                <input
                  ref={videoThumbnailFile}
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  type="file"
                  name="thumbnail"
                />
              </div>
              <div className="mb-6 md:col-span-2">
                <label className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide">
                  Enter Subject
                </label>
                <select
                  onChange={handleChange}
                  className="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border py-3 px-4"
                  name="SubjectId"
                >
                  {subjects.map((subject) => {
                    return (
                      <option value={subject.Subject.id}>
                        {subject.Subject.Name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-x-3">
              <button
                type="submit"
                onClick={onSubmit}
                className="flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490] hover:text-white focus:outline-none focus:ring-0"
              >
                Add
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
    </div>
  );
};

export default FacultyAddVideo;
