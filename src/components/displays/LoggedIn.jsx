import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import PropTypes from 'prop-types';
import styles from '../../styles/loggedin.css';

const spinner =
  'https://64.media.tumblr.com/2e207597333f8528f39870b5b72e800c/tumblr_n8l3gq3Ygs1qza1qzo1_500.gifv';

export default function LoggedIn({ match }) {
  const history = useHistory();
  localStorage.setItem('REFRESH_TOKEN', match.params.refresh_token);
  localStorage.setItem('ACCESS_TOKEN', match.params.access_token);
  localStorage.setItem('CURRENT_USER_ID', match.params.id);
  const { userObject } = useUsers();

  useEffect(() => {
    // I'm guessing this is what you meant? Redirect the user after 9 seconds?
    setTimeout(() => {
      history.push(`/user/${userObject.id}/dash`);
    }, 9000);

    return () => spinner;
  }, []);

  return (
    <div className={styles.login_body}>
      <img className={styles.spinner} src={spinner} alt="vibn logo" />
    </div>
  );
}

LoggedIn.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      access_token: PropTypes.string.isRequired,
      refresh_token: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
