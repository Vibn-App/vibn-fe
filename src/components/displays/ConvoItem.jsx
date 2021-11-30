import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserById } from '../../services/userAuth';
import PropTypes from 'prop-types';
import styles from '../../styles/conversations.css';

const spinner = 'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function ConvoItem({ convo }) {
  // All of the state management here could go into a custom hook
  const [fromUser, setFromUser] = useState({});
  const [loading, setLoading] = useState(true);
  const currentUserId = localStorage.getItem('CURRENT_USER_ID');

  useEffect(() => {
    fetchUserById(convo.from_user)
      .then((user) => setFromUser(user))
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) {
    return <img src={spinner} alt="spinner" />;
  }

  return (
    <Link to={`/convo/${currentUserId}/detail/${convo.id}`}>
      <div className={styles.convo_container}>
        <h4 className={styles.from_name}>
          {fromUser.displayName}
        </h4>
      </div>
    </Link>
  );
}

ConvoItem.propTypes = {
  convo: PropTypes.object,
};
