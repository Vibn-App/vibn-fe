import React from 'react';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
import pass from '../../assets/pass-icon.png';
import msg from '../../assets/msg-user-icon.png';
import DemoHeader from './DemoHeader';
import { useParams, Link } from 'react-router-dom';
import demoUsers from './DemoUsers.js';

export function findById(arr, idee) {
  const number = Number(idee);
  for (const item of arr) {
    if (item.id === number) return item;
  }
  return 'nah bitch';
}

export default function DemoUserDetail() {
  let farts = [];
  const { idee } = useParams();

  const userObject = findById(demoUsers, demoUsers.id);
  farts = userObject.map([]);
  console.log('---shut up bitch----', farts);

  const userArtists = userObject.topArtists;

  return (
    <div className={styles.profile_main}>
      <DemoHeader />
      <section className={styles.profile}>
        <a href={userObject.profileURL} className={styles.profile_link}>
          <img
            className={styles.user_img}
            alt="user image"
            src={userObject.image}
          />
        </a>
        <h2 className={styles.user_name}>{userObject.displayName}</h2>
      </section>

      <section className={styles.match_nav}>
        <Link to="/demo-users">
          <img src={pass} className={styles.pass_btn} />
        </Link>
        <Link to={`/demo-create/${idee}/`}>
          <img src={msg} className={styles.msg_btn} />
        </Link>
      </section>

      <img src={linebreak} alt="linebreak" className={styles.linebreak} />
      <h3 className={styles.top_label}>Their Top Artists</h3>

      <section className={styles.artists_container}>
        <ul className={styles.artists_list}>
          {userArtists
            ? userArtists.map((artist) => (
              <li className={styles.artists_item} key={artist.id}>
                <a href={artist.artistUrl} alt={artist.artistName}>
                  <img
                    className={styles.artist_img}
                    src={artist.artistImage}
                  />
                </a>
                <p className={styles.artist_name}>{artist.artistName}</p>
              </li>
            ))
            : 'No Top Artists Found'}
        </ul>
      </section>
    </div>
  );
}
