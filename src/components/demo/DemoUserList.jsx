import React from 'react';
import DemoHeader from './DemoHeader';
import styles from '../../styles/userlist.css';
import { Link } from 'react-router-dom';
import DemoUserItem from './DemoUserItem';
import linebreak from '../../assets/linebreak.png';
import demoUsers from './DemoUsers';

export default function DemoUserList() {
  return (
    <div>
      <DemoHeader />
      <h1 className={styles.doods}>Find Your Music Match</h1>
      <img src={linebreak} alt="Line break" className={styles.linebreak} />
      <ul
        className={styles.users_container}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          fontFamily: 'Streamster',
          padding: '10px'
        }}
      >
        {demoUsers.map((user) => (
          <li
            className={styles.userlist}
            key={user.id}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: '5px',
              padding: '5px',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
              fontFamily: 'Streamster',
            }}
          >
            <Link to={`/demo-users/${user.id}`}>
              <DemoUserItem 
                displayName={user.displayName} 
                image={user.image}
                key={user.id}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
