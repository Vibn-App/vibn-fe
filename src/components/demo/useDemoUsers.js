import { useEffect, useState } from 'react';
import demoUsers from './DemoUsers';

const fetchDemoUsers = async (id) => {
  const user = await demoUsers.find(user => user.id == id);
  return user;
};

export default function useDemoUsers(id) {
  const [userObject, setOneUser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchDemoUsers(id)
      .then((user) => setOneUser(user))
      .finally(() => setloading(false));
  }, [id]);


  return { userObject, loading };
}
