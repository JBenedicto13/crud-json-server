import React from "react";
import { MaterialSymbolsList } from "../assets/list";
import { MdiViewGrid } from "../assets/grid";
import { MdiUserAdd } from "../assets/addContact";

const header = ({ contactView, setContactView, setSelectModal }) => {
  const handleViewToggle = (view) => {
    setContactView(view);
  };
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl text-">Contacts</h1>
      <div className="flex gap-2">
        <span
          onClick={() => setSelectModal("add-modal")}
          className="cursor-pointer"
        >
          <MdiUserAdd />
        </span>
        <span
          onClick={() => handleViewToggle("grid")}
          className={
            contactView == "grid"
              ? "opacity-20 border border-slate-950 rounded"
              : "cursor-pointer"
          }
        >
          <MdiViewGrid />
        </span>
        <span
          onClick={() => handleViewToggle("list")}
          className={
            contactView == "list"
              ? "opacity-20 border border-slate-950 rounded"
              : "cursor-pointer"
          }
        >
          <MaterialSymbolsList />
        </span>
      </div>
    </div>
  );
};

export default header;
