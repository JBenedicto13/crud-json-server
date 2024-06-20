import React, { useState } from "react";
import ContactList from "../components/contactList";
import ContactGrid from "../components/contactGrid";
import AddContactModal from "../components/addContactModal";
import EditContactModal from "../components/editContactModal";

const Home = ({ data, contactView, selectModal, setSelectModal }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  return (
    <div className="flex justify-center">
      {selectModal == "add-modal" && (
        <AddContactModal data={data} setSelectModal={setSelectModal} />
      )}
      {selectModal == "edit-modal" && (
        <EditContactModal
          data={data}
          setSelectModal={setSelectModal}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      )}
      {contactView == "list" ? (
        <ContactList
          contacts={data}
          selectModal={selectModal}
          setSelectModal={setSelectModal}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      ) : (
        <ContactGrid
          contacts={data}
          selectModal={selectModal}
          setSelectModal={setSelectModal}
        />
      )}
    </div>
  );
};

export default Home;
