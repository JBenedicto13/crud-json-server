import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Routing = ({
  data,
  contactView,
  openModal,
  setOpenModal,
  selectModal,
  setSelectModal,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            data={data}
            contactView={contactView}
            openModal={openModal}
            setOpenModal={setOpenModal}
            selectModal={selectModal}
            setSelectModal={setSelectModal}
          />
        }
      />
    </Routes>
  );
};

export default Routing;
