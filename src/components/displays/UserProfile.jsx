import React from 'react';
import useUsers from '../hooks/useUsers';
import PropTypes from 'prop-types';
import useArtists from '../hooks/useArtists';
import styles from '../../styles/profile.css';
import linebreak from '../../assets/linebreak.png';
import icon from '../../assets/spotify-icon.png';
import Header from './Header';

export default function UserProfile({ match }) {
  // first we set the tokens to local storage
  localStorage.setItem('REFRESH_TOKEN', match.params.refresh_token);
  localStorage.setItem('ACCESS_TOKEN', match.params.access_token);

  // then we update state
  const { userObject, loading } = useUsers();
  const { artists } = useArtists(localStorage.getItem('ACCESS_TOKEN'));


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.profile_main}>
      <Header />
      <section className={styles.profile}>
        <img
          className={styles.profile_pic}
          alt="user image"
          src={userObject.image}
        />
        <h2 className={styles.profile_name}>
          Welcome, {userObject.displayName}!
        </h2>
        <a href={userObject.profileURL} className={styles.profile_link}>
          <img className={styles.spotify_icon} src={icon} alt="Go to your Spotify" />
        </a>
      </section>
      
      <img src={linebreak} alt="linebreak" />

      <h3 className={styles.top_label}>Your Top Artists</h3>

      <section className={styles.artists_container}>
        <ul className={styles.artists_list}>
          {userObject
            ? artists.map((artist) => (
              <li className={styles.artists_item} key={artist.id}>
                <p>
                  <img className={styles.artist_img} src={artist.images[1].url} />
                </p>
                <p className={styles.artist_name}>
                  <a href={artist.external_urls.spotify} alt={artist.name}>
                    {artist.name}
                  </a>
                </p>
                {/* <p className={styles.genres}>{artist.genres}</p> */}
              </li>
            ))
            : 'unavailable'}
        </ul>
      </section>
    <div>
      <img alt="user image" src={userObject.image} />
      <h2>Welcome, {userObject.displayName}!</h2>
      <a href={userObject.profileURL}>Spotify profile</a>

      <h3>Your Top Artists</h3>
      <ul>
        {userObject
          ? artists.map((artist) => (
            <li key={artist.id}>
              <a href={artist.url}>
                <div>{artist.name}</div>
              </a>
              <img src={artist.images[1].url} />
              <p>{artist.genres}</p>
            </li>
          ))
          : 'unavailable'}
        ;
      </ul>
    </div>
  );
}

UserProfile.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      spotify: PropTypes.string,
      url: PropTypes.string,
      id: PropTypes.string,
      genres: PropTypes.string,
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      access_token: PropTypes.string.isRequired,
      refresh_token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
