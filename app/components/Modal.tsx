"use client";
import React, { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, setModalOpen, children }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          {children}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
