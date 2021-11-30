import React, { Component } from 'react';
import styles from '../../styles/createmsg.css';
import linebreak from '../../assets/linebreak.png';
import DemoHeader from './DemoHeader';

export default class DemoCreateConvo extends Component {
  render() {
    return (
      <div className={styles.create_container}>
        <DemoHeader />
        <img src={linebreak} alt="linebreak" />
        <div className={styles.send_msg_header}>This is where you would start a conversation!</div>
      </div>
    );
  }
}
