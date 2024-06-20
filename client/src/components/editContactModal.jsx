import React, { useEffect, useState } from "react";
import http from "../utils/http";

const editContactModal = ({ data, setSelectModal, selectedContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const getSelectedContact = () => {
    http
      .get(`/contacts/${selectedContact}`)
      .then((res) => res.data)
      .then((res) => {
        setName(res.name);
        setEmail(res.email);
        setNumber(res.number);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSelectedContact();
    console.log(selectedContact);
  }, [selectedContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    http
      .put(`/contacts/${selectedContact}`, {
        name,
        email,
        number,
      })
      .then((res) => {
        if (res.status == 200) {
          alert("Contact Updated successfully");
          setSelectModal("");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="fixed top-64 bg-slate-300 rounded px-3 py-5">
      <h1 className="text-2xl">{`EDIT - ${selectedContact}`}</h1>
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
            onClick={() => setSelectModal("")}
            className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded-sm"
            type="button"
            value="Cancel"
          />
          <input
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-sm"
            type="submit"
            value="Update Details"
          />
        </div>
      </form>
    </div>
  );
};

export default editContactModal;
