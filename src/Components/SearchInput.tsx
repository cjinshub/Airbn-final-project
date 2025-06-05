/** @format */

import React from "react";
import IconButton from "../assets/searchicon.png";
import { useState } from "react";

function SearchInput() {
  const [searchInput, setSearchInput] =
    useState("");

  return (
    <>
      <div>
        <form
          action=""
          className=" rounded-4xl h-12 w-108 text-sm font-medium mx-auto flex  px-2 shadow-2xl "
        >
          <div className="flex gap-5 text-center mt-3.5 ml-2 cursor-pointer">
            <h4>Anywhere</h4>
            <hr className="border-1 h-6 opacity-20" />
            <h4>Any week</h4>
          </div>
          <hr className="border-1 h-6 mt-3.5 ml-5 opacity-20" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) =>
              setSearchInput(e.target.value)
            }
            className="border-none outline-none text-center w-18 ml-7"
            placeholder="Add guests"
          />

          <div>
            <img
              className=" h-8 w-8 cursor-pointer mt-2.5 ml-20"
              src={IconButton}
              alt=""
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchInput;
