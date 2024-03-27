"use client";

import React from "react";
import styles from "./Feedback.module.css";
import { useEffect } from "react";

const Feedback = ({ id, title, messages, handleClose }) => {
  // const handleClose = () => {
  //   const modal = document.getElementById(id);
  //   modal.style.display = "none";
  // };
  // useEffect(() => {
  //   // Get the modal
  //   const modal = document.getElementById(id);

  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function (event) {
  //     if (event.target === modal) {
  //       modal.style.display = "none";
  //     }
  //   };
  // });

  return (
    // <!-- Modal content -->
    <div id={id} className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <span className={styles.close} onClick={handleClose}>
            &times;
          </span>
          <h2>{title}</h2>
        </div>
        <div className={styles.modal_body}>
          <ul className="list-disc">
            {messages?.map((message, i) => (
              <li key={`message-${i}`}>
                <p>{message}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={styles.modal_footer}>
          <h3>Modal Footer</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Feedback;
