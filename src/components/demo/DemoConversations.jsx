import React from 'react';
import { Link } from 'react-router-dom';
import DemoHeader from './DemoHeader';
import styles from '../../styles/conversations.css';
import linebreak from '../../assets/linebreak.png';

export default function Conversations() {
  return (
    <div className={styles.top_container}>
      <DemoHeader />
      <h1 className={styles.message_title}>Your Messages</h1>
      <img src={linebreak} alt="linebreak" />
      <main className={styles.main_container}>
        <Link to="/demo-convo/detail/demo1">
          <h1>Gary Busey</h1>
        </Link>
        <Link to="/demo-convo/detail/demo2">
          <h1>Sbeve II</h1>
        </Link>
      </main>
    </div>
  );
}
