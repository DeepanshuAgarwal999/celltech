import React, { useState } from "react";
import { DataType } from "../dummyData";
import { FaRegHeart } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Card = ({
  destination,
  rating,
  authorName,
  imgUrl,
  likes,
  id,
  title,
  authorImg,
  description,
}: DataType) => {
  const [likeCount, setLikeCount] = useState(likes);
  return (
    <div className="max-sm:w-[300px] max-sm:height[420px] sm:w-[320px] h-auto mx-auto bg-[#18181b] overflow-hidden rounded-xl">
      <div className="group relative overflow-hidden rounded-lg">
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 object-cover h-[250px] w-full transition-all duration-500 "
          src={imgUrl}
          alt={destination}
        />
        <div className="absolute -bottom-full left-12 group-hover:bottom-20 z-50 transition-all duration-500 ">
          <span className="text-white">{destination}</span>
        </div>
        <div className="absolute -bottom-full left-12 group-hover:bottom-10 z-50 transition-all duration-700">
          <span className="text-white text-3xl line-clamp-1">{title}</span>
        </div>
      </div>
      <div className="p-2 bg-[#262629] ">
        <h1 className="text-lg font-semibold text-white line-clamp-1 capitalize">
          {title}
        </h1>
        <p className="text-sm pr-1 py-1 line-clamp-2 font-semibold text-gray-500">
          {description}
        </p>
        <NavLink
          to={`/destination/${id}`}
          className="font-bold text-[14px]  text-[#d8d8dc] "
        >
          Read More
        </NavLink>
        <div className="flex items-center gap-1 justify-between pt-2">
          <div className="flex items-center gap-2 pl-1 justify-between">
            <img
              src={authorImg}
              alt="authorImg"
              className="rounded-[50%]"
              width={16}
              height={16}
            />
            <p className="font-semibold text-[14px]  text-[#A1A1AA] line-clamp-1">
              {authorName}
            </p>
          </div>
          <div className="flex items-center gap-1 justify-between px-1 text-white">
            <button onClick={() => setLikeCount(likes + 1)}>
              <FaRegHeart />
            </button>

            {likeCount}
            <RiStarSLine />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
