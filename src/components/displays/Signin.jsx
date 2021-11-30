import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../styles/signin.css';
import vibn from '../../assets/vibn.png';
import linebreak from '../../assets/linebreak.png';

export default function Login() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Did you mean to use `history.push` here?
    window.location.href = 'https://vibn.herokuapp.com/api/v1/auth/login';
  };

  const handleDemo = (event) => {
    event.preventDefault();
    history.push('/demo-profile');
  };

  return (
    <div className={styles.signin_body}>
      <img className={styles.vibn_logo} src={vibn} alt="vibn logo" />
      <p className={styles.vibn_desc}>Find your music match</p>
      <img className={styles.linebreak} src={linebreak} alt="linebreak" />
      <form onSubmit={handleSubmit}>
        <button className={styles.signin_btn}>Sign up with Spotify</button>
      </form>
      <form onSubmit={handleDemo}>
        <button className={styles.demo_btn}>Sign in for Demo View</button>
      </form>
    </div>
  );
}
