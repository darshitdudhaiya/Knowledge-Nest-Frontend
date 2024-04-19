import React from "react";
import thumbnail from "assets/img/videos-thumbnails/download-1.webp";
const Videos = () => {
  return (
    <div className="flex items-center justify-center">
      <main className="mt-4 flex w-full flex-col  justify-center p-4 md:flex-row ">
        <div className="grid w-full grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Sample video cards, you can repeat this block for each video  */}
          <div className="rounded-[20px] bg-white p-2 shadow-md">
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="mb-1 h-44 w-full rounded-[20px] object-cover p-1"
            />
            <div className="grid items-center px-2">
              <p className="text-md font-semibold">Pythagorean Theorem</p>
              <p className="text-[14px] text-gray-500">Saunak Purohit</p>
            </div>
          </div>
          <div className="rounded-[20px] bg-white p-2 shadow-md">
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="mb-1 h-44 w-full rounded-[20px] object-cover p-1"
            />
            <div className="grid items-center px-2">
              <p className="text-md font-semibold">Pythagorean Theorem</p>
              <p className="text-[14px] text-gray-500">Saunak Purohit</p>
            </div>
          </div>
          <div className="rounded-[20px] bg-white p-2 shadow-md">
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="mb-1 h-44 w-full rounded-[20px] object-cover p-1"
            />
            <div className="grid items-center px-2">
              <p className="text-md font-semibold">Pythagorean Theorem</p>
              <p className="text-[14px] text-gray-500">Saunak Purohit</p>
            </div>
          </div>
          <div className="rounded-[20px] bg-white p-2 shadow-md">
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="mb-1 h-44 w-full rounded-[20px] object-cover p-1"
            />
            <div className="grid items-center px-2">
              <p className="text-md font-semibold">Pythagorean Theorem</p>
              <p className="text-[14px] text-gray-500">Saunak Purohit</p>
            </div>
          </div>

          {/* Repeat for more video cards  */}
        </div>
      </main>
    </div>
  );
};

export default Videos;
