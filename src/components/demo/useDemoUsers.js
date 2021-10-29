import { useEffect, useState } from 'react';
import demoUsers from './DemoUsers';

export const fetchDemoUsers = async () => {
  const doods = await demoUsers;

  return doods;
};

export default function useDemoUsers() {
  const [allUsers, setAllUsers] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchDemoUsers()
      .then((user) => setAllUsers(user))
      .finally(() => setloading(false));
  }, []);

  return { allUsers, loading };
}
