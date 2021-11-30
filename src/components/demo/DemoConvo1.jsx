import React, { Component } from 'react';
import DemoHeader from './DemoHeader';
import styles from '../../styles/conversations.css';

export default class DemoConvo1 extends Component {
  render() {
    return (
      <div className={styles.convo_container}>
        <DemoHeader />
        <h4 className={styles.from_container}>
          <p className={styles.from_item}>From: Gary Busey</p>
          <p className={styles.from_item}>Date: Friday, October 15, 2021</p>
        </h4>

        <article className={styles.message_container}>
          <p className={styles.message_p}>Add me on insta, we should talk kpop!</p>
        </article>
      </div>
    );
  }
}
