import React from "react";
import styles from "../../styles/buttons.module.css";

const BubbleButton = () => {
  return (
    <div>
      <div className={styles.bubbleButton}>
        <button>
          Contact us
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default BubbleButton;
