import React from "react";

export const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full h-96" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-cyan-500 mb-2">
            Photographed by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2 mt-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
  );
};
