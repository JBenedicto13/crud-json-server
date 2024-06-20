import React from "react";

const contactGrid = ({ contacts }) => {
  return (
    <div className="contact-grid">
      <ul className="flex gap-2">
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              className="text-left list-none border border-slate-950 p-2 rounded"
            >
              <p>{`Name: ${contact.name}`}</p>
              <p>{`Email: ${contact.email}`}</p>
              <p>{`Number: ${contact.number}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default contactGrid;
