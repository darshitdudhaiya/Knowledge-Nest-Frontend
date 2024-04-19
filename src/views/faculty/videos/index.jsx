import React, { useEffect } from "react";
import thumbnail from "assets/img/videos-thumbnails/download-1.webp";
import { useState } from "react";
import FacultyAddVideo from "./components/VideoModel";
import { getVideosAsync } from "services/videos/videoServices";
import { environment } from "environment/Environment";
import { Link } from "react-router-dom";
const Videos = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videos = await getVideosAsync();
    setData(videos.data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <div className="mt-3">
        <div className="mt-3 grid grid-flow-col justify-start  gap-2 sm:auto-cols-max sm:justify-end">
          <button
            type="button"
            onClick={openForm}
            className="flex items-center justify-center rounded border bg-[#10375e] py-2 px-4 font-semibold text-white hover:bg-[#185490]  hover:text-white focus:outline-none focus:ring-0"
          >
            Add +
          </button>
        </div>
        <div className="flex items-center justify-center">
          <main className="mt-4 flex w-full flex-col  justify-center p-4 md:flex-row ">
            <div className="grid w-full grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Sample video cards, you can repeat this block for each video  */}
              {data.map((video) => {
                console.log("video", video.ThumbnailName);
                return (
                  <Link key={video.id} to={`/faculty/view-video/${video.id}`}>
                    {" "}
                    <div className="rounded-[20px] bg-white p-2 shadow-md">
                      <img
                        src={`${environment.baseurlForFiles}/video-thumbnails/${video.ThumbnailName}`}
                        alt="Video Thumbnail"
                        className="mb-1 h-44 w-full rounded-[20px] object-cover p-1"
                      />
                      <div className="grid items-center px-2">
                        <p className="text-md font-semibold">{video.Title}</p>
                        <p className="text-[14px] text-gray-500">
                          {video.User?.UserProfile?.Name}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* Repeat for more video cards  */}
            </div>
          </main>
        </div>
      </div>

      <FacultyAddVideo
        title="Add Video Subject"
        isOpen={isFormOpen}
        onClose={closeForm}
        fetchData={fetchData}
      />
      <FacultyAddVideo title="Add Video" open={isFormOpen} close={closeForm} />
    </>
  );
};

export default Videos;
