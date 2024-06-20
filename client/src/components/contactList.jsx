import React from "react";
import http from "../utils/http";

const contactList = ({ contacts, setSelectModal, setSelectedContact }) => {
  const handleEditModal = (id) => {
    setSelectModal("edit-modal");
    setSelectedContact(id);
  };
  const handleDelete = (id) => {
    http
      .delete(`/contacts/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Contact Deleted Successfully");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="contact-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td className="text-left">{contact.name}</td>
                <td className="text-left">{contact.email}</td>
                <td className="text-left">{contact.number}</td>
                <td>
                  <button
                    onClick={() => handleEditModal(contact.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-sm"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default contactList;
