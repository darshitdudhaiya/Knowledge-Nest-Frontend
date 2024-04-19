import React, { useEffect, useState } from "react";
import userPhoto from "assets/img/videos-thumbnails/download-3.webp";
import { useParams } from "react-router-dom";
import instance from "services/Instance";
import { environment } from "environment/Environment";

const ViewVideo = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [video, setVideo] = useState("");

  const fetchData = async () => {
    try {
      const response = await instance.get(`/videos/getbyid/${id}`);
      setData(response.data.data);
      setVideo(
        `${environment.baseurlForFiles}/videos/${response.data.data.FileName}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Video Player Section */}
      <div className="grid md:w-4/5 ">
        <div className="grid grid-cols-1 justify-start px-4 pt-4 ">
          {/* Profile Picture Div */}
          <div className="mb-2 flex w-full  items-center">
            <div className="h-10 w-10 overflow-hidden rounded-full"></div>
            <div className="flex  w-full w-full items-center justify-between px-4 font-bold"></div>
          </div>
        </div>
        <div className="px-4">
          {/* Simple Video Card in Video Description */}
          <div className="aspect-w-16 aspect-h-9 relative mt-2 h-[500px]">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-md shadow-md">
              <video className="h-full w-full object-cover" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{data.Title}</h2>
          <p className="text-sm text-gray-600">{data.Description}</p>
        </div>
      </div>
      {/* Suggested Videos Section */}
      <div className="p-4 md:w-1/4">
        <div className="mt-[20px] flex items-start   justify-start pt-8 text-lg font-semibold">
          <span className="-mt-[45px]">Attachments</span>
        </div>
        <div className="scrollbar-hide max-h-[550px] space-y-4 overflow-y-auto">
          {/* New Suggested Video Card with File Icon, Filename, and Eye Icon */}
          <div className="flex h-[90px]  items-center items-center justify-center overflow-hidden rounded-[20px] bg-white bg-clip-border px-4">
            <div className="file-icon mr-4 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#f4f7fe] p-1">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="h-6 w-6 text-[#3B82F6]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z"></path>
                  <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z"></path>
                  <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z"></path>
                </svg>
              </span>
            </div>
            <div className="filename flex-grow text-start text-[20px] font-semibold text-[#1B254B]">
              Video.mp4
            </div>
            <div className="eye-icon ">
              <span className="">
                <img src="./images/view.png" alt="" className="h-6 w-6" />
              </span>
            </div>
          </div>
          {/* Repeat similar cards for other suggested videos */}
        </div>
      </div>
    </div>
  );
};

export default ViewVideo;
