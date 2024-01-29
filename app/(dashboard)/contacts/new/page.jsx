"use client";
import React, { useState } from "react";

function page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);
  console.log(lastName);
  function submitData() {
    const newContact = {
      firstName,
      lastName,
    };
    //save local storage
    console.log(newContact);
    setFirstName("");
    setLastName("");
  }
  return (
    <div>
      <h2>Create New Contact</h2>
      <div className="max-w-3xl mx-auto">
        <div className="mb-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First Name
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="firstName"
              id="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="eg John"
            />
          </div>
        </div>
        <div className="mb-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="lastName"
              id="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="eg John"
            />
          </div>
        </div>
        <div className="my-2">
          <button
            className="bg-slate-800 text-slate-50 rounded-sm py-2 px-4"
            onClick={submitData}
          >
            Submit
          </button>
        </div>
      </div>
      <hr />
      <h2>First Name: {firstName}</h2>
      <h2>Last Name : {lastName}</h2>
    </div>
  );
}

export default page;
