import { useEffect, useState } from 'react';
// import demoUsers from './DemoUsers';

const fetchDemoUsers = async () => {
  const doods = await fetch('./demoUsers');
  console.log('----poo000000000ooop---', doods);
  const {
    id, displayName, profileURL, image
  } = await doods;
  return { id, displayName, profileURL, image };
  // return doods.map((dood) => ({
  //   id: dood.id,
  //   displayName: dood.displayName,
  //   profileURL: dood.profileURL,
  //   image: dood.image
  // }));
};

export default function useDemoUsers(id) {
  const [userObject, setAllUsers] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchDemoUsers(id)
      .then((user) => setAllUsers(user))
      .finally(() => setloading(false));
  }, [id]);

  return { userObject, loading };
}
