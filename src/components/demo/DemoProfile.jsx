import React from 'react';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
import DemoHeader from './DemoHeader';
import logo from '../../assets/spotify-icon.png';
import demoUsers from './DemoUsers.js';

export default function DemoProfile() {
  const artist = demoUsers[1].topArtists;

  return (
    <div className={styles.profile_main}>
      <DemoHeader />
      <section className={styles.profile}>
        <img
          className={styles.demo_pic}
          alt="user image"
          src="https://i.pinimg.com/originals/55/89/5b/55895b77755f726e002422f77dbdc905.jpg"
        />
        <h2 className={styles.profile_name}>Welcome, Demo User!</h2>
        <a
          href="https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt?si=nrlbSqhNR5iIrJkFJW7N8A"
          className={styles.profile_link}
        >
          <img src={logo} className={styles.spotify_icon} />
        </a>
      </section>

      <img src={linebreak} alt="linebreak" className={styles.linebreak} />

      <h3 className={styles.top_label}>Your Top Artists</h3>

      <section className={styles.artists_container}>
        <ul className={styles.artists_list}>
          {artist.map((artist) => (
            <li className={styles.artists_item} key={artist.id}>
              <a href={artist.artistURL} alt={artist.artistName}>
                <img className={styles.artist_img} src={artist.artistImage} />
              </a>
              <p className={styles.artist_name}>{artist.artistName}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
