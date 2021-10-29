import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import list_icon from '../../assets/user-list-icon.png';
import logout_icon from '../../assets/logoout-icon.png';
import cv_icon from '../../assets/conversation-icon.png';
import profile_icon from '../../assets/profile-icon.png';
import vibn from '../../assets/vibn.png';
import styles from '../../styles/header.css';

export default class DemoHeader extends Component {

  handleSignout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    window.location.href = '/';
  };

  render() {
    return (
      <header>
        <div className={styles.nav_links}>
          <div className={styles.icon}>
            <Link onClick={this.handleSignout} to="/">
              <img className={styles.bicon} src={logout_icon} />
            </Link>
          </div>
          <div className={styles.icon}>
            <Link to="/demo-users">
              <img className={styles.aicon} src={list_icon} />
            </Link>
          </div>
          <Link to="/demo-about">
            <img
              className={styles.vibn_logo}
              src={vibn}
              alt="About the Vibn Team"
            />
          </Link>
          <div className={styles.icon}>
            <Link to="/demo-convo/conversations">
              <img className={styles.cvicon} src={cv_icon} />
            </Link>
          </div>
          <div className={styles.icon}>
            <Link to="/demo-profile">
              <img className={styles.cicon} src={profile_icon} />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
