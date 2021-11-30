import React, { Component } from 'react';
import DemoHeader from './DemoHeader';
import styles from '../../styles/conversations.css';

export default class DemoConvo2 extends Component {
  render() {
    return (
<div className={styles.convo_container}>
        <DemoHeader />
        <h4 className={styles.from_container}>
          <p className={styles.from_item}>From: Sbeve II</p>
          <p className={styles.from_item}>Date: Sunday, October 31, 2021</p>
        </h4>

        <article className={styles.message_container}>
          <p className={styles.message_p}>Hey have you heard of that great Farrah Fawcett hairspray? Also do you not LOVE the soundtrack from Hairspray!?</p>
        </article>
      </div>
    );
  }
}
