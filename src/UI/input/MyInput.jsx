import React from 'react';
import styles from './MyInput.module.css';

const MyInput = (props) => {
  return <input {...props} className={styles.myInput} />;
};

export default MyInput;
