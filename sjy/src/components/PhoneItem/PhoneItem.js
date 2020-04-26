// 경로 : src/components/PhoneItem/PhoneItem.js

import React from "react";
import styles from "./PhoneItem.module.scss";

const PhoneItem = ({id, name, phone, onClick}) => {
  return (
    <div className={styles.phone_item}>
      <div className={styles.phone_item_left}>
        <div className={styles.phone_item_name}>{name}</div>
        <div className={styles.phone_item_phone}>{phone}</div>
      </div>
      <div className={styles.phone_item_right}>
        <button onClick={() => onClick(id)}>삭제</button>
      </div>
    </div>
  );
};

export default PhoneItem;