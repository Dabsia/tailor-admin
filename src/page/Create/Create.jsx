import React from "react";

const Create = () => {
  return (
    <div className="w-full">
      <h1 className="text-[24px] font-bold">Create A product</h1>
      <form className="mt-5 w-full ">
        <div className="flex mb-4 justify-between">
          <div className="flex w-[47%] flex-col">
            <label>Product Name</label>
            <input
              className="border-2 outline-none p-3 mt-2 border-black"
              placeholder="name"
            />
          </div>
          <div className="flex w-[47%] flex-col">
            <label>Price</label>
            <input
              className="border-2 outline-none p-3 mt-2 border-black"
              placeholder="price"
            />
          </div>
        </div>
        <div className="flex mb-4 justify-between">
          <div className="flex w-[47%] flex-col">
            <label>Product Category</label>
            <select
              className="border-2 outline-none p-3 mt-2 border-black"
              placeholder="category"
            >
              <option>Children</option>
              <option>Men</option>
              <option>Women</option>
            </select>
          </div>
          <div className="flex w-[47%] flex-col">
            <label>Product Image</label>
            <input
              className="border-2 outline-none p-3 mt-2 border-black"
              type="file"
            />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <label>Product Name</label>
          <textarea
            className="border-2 outline-none h-[200px] p-3 mt-2 border-black"
            placeholder="Briefly describe this piece"
          />
        </div>
        <button className="w-full text-white bg-black p-4 mt-5 ">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Create;
