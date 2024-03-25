"use client";

import React, { useState } from "react";
import styles from "./OpenWithdrawModal.module.css";
import { useSession } from "next-auth/react";

const OpenWithdrawModal = ({ id, account }) => {
  const [amount, setAmount] = useState(0);
  const { data } = useSession();
  const email = data?.user?.email;

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSuccessModalOpen = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "none";
    // making an api request to the server to store the details
    if (email && amount) {
      fetch("/api/data/withdraw-fund", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...account, email, amount }),
      })
        .then((res) => {
          if (!res.ok) {
            alert("Error occured on server.");
            return;
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Try again later.");
    }
  };

  const handleCloseModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "none";
  };

  return (
    <>
      <div id={id} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <span className={styles.close} onClick={() => handleCloseModal(id)}>
              &times;
            </span>
            <h2 className="text-center text-3xl font-semibold py-4">
              Request for withdrawal funds
            </h2>
          </div>
          <div className={styles.modal_body}>
            <p className="border-b text-center text-base py-4">
              Your request cannot exceed {account?.fundAvailable}$.
            </p>
            <div className="flex items-center justify-center gap-2 py-4">
              <div className="w-max p-4 border flex items-center justify-center gap-2">
                <p>Insert the amount in</p>
                <div className="flex items-center gap-2 border px-4 py-2">
                  <input
                    type="number"
                    className="outline-none focus:outline"
                    defaultValue={amount}
                    min={0}
                    onChange={handleChange}
                    required
                  />
                  <span className="border-l">$</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modal_footer}>
            <button
              type="button"
              className="bg-[#F00] px-12 py-4 text-white text-2xl font-semibold"
              onClick={() => handleSuccessModalOpen(id)}
            >
              Validate your request
            </button>
            <p className="text-center py-8">After validation, your request will be taken into your account as soon as possible</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenWithdrawModal;
