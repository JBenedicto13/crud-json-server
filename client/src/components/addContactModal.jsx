import React, { useState } from "react";
import http from "../utils/http";

const addContactModal = ({ data, setSelectModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    http
      .post("/contacts", {
        id: (data.length + 1).toString(),
        name,
        email,
        number,
      })
      .then((res) => res.data)
      .then((res) => {
        alert(res.name + " was added to the contact list");
        setSelectModal("");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="fixed top-64 bg-slate-300 rounded px-3 py-5">
      <h1 className="text-2xl">ADD</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-start w-full border gap-5 border-none"
      >
        <div className="flex w-full text-2xl">
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="flex w-full text-2xl">
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full text-2xl"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="flex w-full text-2xl">
          <label htmlFor="number">Number: </label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            className="w-full"
            type="number"
            name="number"
            id="number"
            placeholder="Enter number"
          />
        </div>
        <div className="flex w-full justify-center text-2xl gap-5">
          <input
            onClick={() => setSelectModal(false)}
            className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded-sm"
            type="button"
            value="Cancel"
          />
          <input
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-sm"
            type="submit"
            value="Add Contact"
          />
        </div>
      </form>
    </div>
  );
};

export default addContactModal;
