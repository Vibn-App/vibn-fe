import React from 'react';
import { Link } from 'react-router-dom';
import DemoHeader from './DemoHeader';
import styles from '../../styles/conversations.css';

export default function Conversations() {
  return (
    <div className={styles.top_container}>
      <DemoHeader />
      <h1 className={styles.message_title}>Your Messages</h1>
      <main className={styles.main_container}>
        <Link to="/demo-convo/detail/demo1">
          <h1>Sbeve</h1>
        </Link>
        <Link to="/demo-convo/detail/demo2">
          <h1>Jeep</h1>
        </Link>
      </main>
    </div>
  );
}
