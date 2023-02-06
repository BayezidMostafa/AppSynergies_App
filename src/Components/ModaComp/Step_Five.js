import React from "react";

const Step_Five = () => {
  return (
    <div className="">
      <p className="-mt-5">
        Leave your details so we can contact you about your estimation.
      </p>
      <div className="bg-white p-3 mt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input
            required
            placeholder="First Name*"
            className="block w-full p-3 border border-gray-400"
            type="text"
          />
          <input
            required
            placeholder="Last Name*"
            className="block w-full p-3 border border-gray-400"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <input
            required
            placeholder="Email*"
            className="block w-full p-3 border border-gray-400"
            type="text"
          />
          <input
            required
            placeholder="Phone Number*"
            className="block w-full p-3 border border-gray-400"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <input
            placeholder="Company Name"
            className="block w-full p-3 border border-gray-400"
            type="text"
          />
          <input
            placeholder="Your Position"
            className="block w-full p-3 border border-gray-400"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <select
            className="block w-full p-3 border border-gray-400"
            name=""
            id=""
          >
            <option disabled selected value="What is your budget">
              What is your budget
            </option>
            <option value="Less than $5,000">Less than $5,000</option>
            <option value="Less than $25,000">Less than $25,000</option>
            <option value="Less than $50,000">Less than $50,000</option>
            <option value="Less than $100,000">Less than $100,000</option>
            <option value="Less than $150,000">Less than $150,000</option>
            <option value="More than $150,000">More than $150,000</option>
          </select>
          <select
            className="block w-full p-3 border border-gray-400"
            name=""
            id=""
          >
            <option disabled selected value="Where did you hear about us">
              Where did you hear about us
            </option>
            <option value="Google">Google</option>
            <option value="Friends and Family">Friends and Family</option>
            <option value="Social Media">Social Media</option>
            <option value="Blogs">Blogs</option>
            <option value="Radio">Radio</option>
            <option value="TV">TV</option>
            <option value="Newspaper">Newspaper</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
      <div>
        <p className="mt-5 mb-2">Do you need an NDA first?</p>
        <div className="flex gap-2">
          <label htmlFor="" className="bg-white p-2 flex gap-2 rounded">
            <input type="radio" name="radio" className="cursor-pointer" />
            <span>Yes</span>
          </label>
          <label htmlFor="" className="bg-white p-2 flex gap-2 rounded">
            <input type="radio" name="radio" className="cursor-pointer" />
            <span>No</span>
          </label>
        </div>
        <div className="my-8">
          <label htmlFor="">
            <input type="checkbox" className="cursor-pointer" />
            <span className="ml-2">
              *I accept Privacy Policy and agree to receive emails from
              AppSynergies
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step_Five;
