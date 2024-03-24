"use client";

import React, { useState } from "react";
import styles from "./OpenAcountModal.module.css";
import OpenAccountModalSuccess from "../OpenAcountModalSuccess/OpenAcountModalSuccess";
import { useSession } from "next-auth/react";

const OpenAccountModal = ({ id, plan }) => {
  const [amount, setAmount] = useState(0);
  const { data } = useSession();
  const email = data?.user?.email;

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSuccessModalOpen = (successId, id) => {
    const handleSuccess = () => {
      const successModal = document.getElementById(successId);
      successModal.style.display = "block";

      const modal = document.getElementById(id);
      modal.style.display = "none";
    };

    // making an api request to the server to store the details
    if (email && amount) {
      fetch("/api/data/money-recieved", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...plan, email, amount }),
      })
        .then((res) => {
          if (!res.ok) {
            alert("Error occured on server.");
            return;
          }
          handleSuccess();
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
              Open An Account
            </h2>
          </div>
          <div className={styles.modal_body}>
            <p className="border-b text-center text-base py-4">
              The amount must belong to the span from 0€ to 0€ to enjoy the
              benefits of this account. Payment must be made within 48 hours to
              validate your deposit. To start investing immediately, please
              validate your guarantee account by clicking here After inserting
              the amount that you want to credit to your account and then
              "Validate", you must contact your advisor to finalize the terms of
              collection.
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
              onClick={() => handleSuccessModalOpen(`${id}-success`, id)}
            >
              Validate
            </button>
          </div>
        </div>
      </div>
      <div>
        <OpenAccountModalSuccess id={`${id}-success`} />
      </div>
    </>
  );
};

export default OpenAccountModal;
