import React from "react";

export default function Listing() {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="w-[80vw] flex p-10 justify-around items-center">
        <div className="left flex flex-col gap-5">
          <input
            type="text"
            className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
            placeholder="car name"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none resize-none"
            placeholder="CAR DESCRIPTION"
          ></textarea>
          <input
            type="text"
            className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
            placeholder="car type"
          />
          <input
            type="text"
            className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
            placeholder="drive type"
          />
          <input
            type="text"
            className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
            placeholder="claim mileage"
          />
          <input
            type="text"
            className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
            placeholder="HorsePower"
          />
        </div>

        <div className="right flex flex-col gap-12">
          <div className="flex flex-col items-center gap-4">
            <p className="text-white">Variant 1</p>
            <input
              type="text"
              className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
              placeholder="VARIANT NAME"
            />
            <input
              type="text"
              className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
              placeholder="PRICE"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-white">Variant 1</p>
            <input
              type="text"
              className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
              placeholder="VARIANT NAME"
            />
            <input
              type="text"
              className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
              placeholder="PRICE"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-white">Variant 1</p>
            <input
              type="text"
              className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
              placeholder="VARIANT NAME"
            />
            <input
              type="text"
              className="p-3 rounded-lg bg-[#2C2A2A] text-center w-96 cursor-auto focus:outline-none"
              placeholder="PRICE"
            />
          </div>
        </div>
        <div className="center flex flex-col items-start gap-10 w-64">
          <p>
            CAR IMAGES{" "}
            <span className="text-[#4d4c4c] p-3">
              The first image will be the cover(min 3 and max 4)
            </span>
          </p>
          <input type="file" name="" id="" className="cursor-pointer" />
        </div>
      </div>
      <button className="bg-[#2C2A2A] p-3 rounded-xl">CREATE LISTING</button>
    </div>
  );
}
