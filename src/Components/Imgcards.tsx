/** @format */

import React, { useState } from "react";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image (2).png";
import Image3 from "../assets/Image (3).png";
import Image4 from "../assets/Image (4).png";
import Image5 from "../assets/Image (5).png";
import Image6 from "../assets/Image (6).png";
import Image7 from "../assets/Image (7).png";
import Image8 from "../assets/Image (8).png";
import Image9 from "../assets/Image (9).png";
import Image10 from "../assets/Image (10).png";
import Image11 from "../assets/Image (11).png";
import Image12 from "../assets/Image (12).png";
import Image13 from "../assets/Image (13).png";
import Image14 from "../assets/Image (14).png";
import Image15 from "../assets/Image (15).png";
import Image16 from "../assets/Image (16).png";
import Image17 from "../assets/Image (17).png";
import Image18 from "../assets/Image (18).png";
import Image19 from "../assets/Image (19).png";
import Image20 from "../assets/Image (20).png";
import Image21 from "../assets/hotel1.jpg";
import Image22 from "../assets/Hotel-room-3.jpg";
import Image23 from "../assets/hotel-4.jpeg";
import Image24 from "../assets/hotel6.avif";
import Rating from "../assets/Ratings.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Imgcards() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
  ];

  const [visibleCount, setVisibleCount] =
    useState(16);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 8, images.length)
    );
  };

  const location = "Half Moon Bay, California US";
  const ratingValue = "5.0";
  const description1 = "Beach and ocean views";
  const description2 =
    "22-07 Oct. Individual host";
  const price = "£1,634 total";

  return (
    <>
      <div className="grid grid-cols-4 gap-8 ml-5 px-0">
        {images
          .slice(0, visibleCount)
          .map((imgSrc, index) => (
            <div key={index}>
              <img
                className="rounded-2xl h-84 w-84 shadow-2xl"
                src={imgSrc}
                alt={`Image ${index + 1}`}
              />
              <div className="absolute translate-y-[-280px] translate-x-[260px] cursor-pointer">
                <FavoriteIcon />
              </div>
              <div className="ml-1 mt-2">
                <p className="flex gap-18">
                  {location}
                  <div className="flex gap-2">
                    <img
                      className="h-3 w-3 mt-1.5"
                      src={Rating}
                      alt="rate"
                    />
                    <p>{ratingValue}</p>
                  </div>
                </p>
                <p className="opacity-50 text-sm">
                  {description1}
                </p>
                <p className="opacity-50 text-sm">
                  {description2}
                </p>
                <p>{price}</p>
              </div>
            </div>
          ))}
      </div>

      {/* showmore */}
      {visibleCount < images.length && (
        <div className="align-middle translate-x-[520px] mt-12">
          <p className="font-bold">
            Continue exploring amazing views
          </p>
          <div
            className="cursor-pointer bg-black text-white h-12 w-32 rounded-2xl text-center pt-2.5 ml-14 mt-3"
            onClick={handleSeeMore}
          >
            Show more
          </div>
        </div>
      )}
    </>
  );
}

export default Imgcards;
