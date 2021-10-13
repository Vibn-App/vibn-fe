import React from 'react';
import styles from '../../styles/userlist.css';
import PropTypes from 'prop-types';
import { useUsers } from '../../hooks/useUsers';
import { useUserArtists } from '../../hooks/useUserArtists';

export default function UserItem() {
  const { user } = useUsers();
  const { artists } = useUserArtists();

  return (
    <div>
      <section className={styles.user_info}>
        <img
          className={styles.user_img}
          src={user.image}
          alt={user.displayName}
        />
        <h2 className={styles.user_name}>{user.displayName}</h2>
      </section>
      <section className={styles.top_artists}>
        <p className={styles.artist_name}>{artists.artist_a}</p>
        <p className={styles.artist_name}>{artists.artist_b}</p>
      </section>
    </div>
  );
}

UserItem.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      image: PropTypes.string,
      spotify: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      artist_a: PropTypes.string,
      artist_b: PropTypes.string,
    })
  ),
};