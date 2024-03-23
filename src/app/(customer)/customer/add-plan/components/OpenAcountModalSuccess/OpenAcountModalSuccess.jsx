"use client";

import React from "react";
import styles from "./OpenAcountModalSuccess.module.css";
import Link from "next/link";

const OpenAccountModalSuccess = ({ id }) => {
  const handleCloseModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "none";
  };
  return (
    <div id={id} className={styles.modal}>
      <div className={styles.modal_content}>
        <div class={styles.modal_header}>
          <span className={styles.close} onClick={() => handleCloseModal(id)}>
            &times;
          </span>
          <h2 className="text-center text-3xl font-semibold py-4">
            Success Opening An Account
          </h2>
        </div>
        <div className={styles.modal_body}>
          <p className="text-center text-base py-4">
            Congratulations, Payment must be made within 48 hours to validate
            your deposit. Amount of the request: To start investing immediately,
            please validate your guarantee account by clicking here
          </p>
          <div className="flex items-center justify-center">
            <Link
              href={"/payment-page"}
              className="text-[#f00] text-lg text-center hover:underline underline-offset-4"
            >
              Payment Page
            </Link>
          </div>
        </div>
        <div className={styles.modal_footer}>
          <button
            type="button"
            className="bg-[#F00] px-12 py-4 text-white text-2xl font-semibold"
            onClick={() => handleCloseModal(id)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenAccountModalSuccess;
