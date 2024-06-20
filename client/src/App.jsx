import { useEffect, useState } from "react";
import "./App.css";
import http from "./utils/http";
import Header from "./components/header";
import Routing from "./Routing";

function App() {
  const [data, setData] = useState([]);
  const [contactView, setContactView] = useState("list");
  const [selectModal, setSelectModal] = useState("");
  useEffect(() => {
    http
      .get("/contacts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <Header
        setContactView={setContactView}
        contactView={contactView}
        selectModal={selectModal}
        setSelectModal={setSelectModal}
      />
      <div className="main">
        <Routing
          data={data}
          contactView={contactView}
          selectModal={selectModal}
          setSelectModal={setSelectModal}
        />
      </div>
    </div>
  );
}

export default App;
