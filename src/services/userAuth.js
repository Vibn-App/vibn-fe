const URL = 'https://vibn.herokuapp.com/api/v1'; // Can be moved to .env

export const fetchCurrentUser = async () => {
  const res = await fetch(`${URL}/auth/verify`, {
    credentials: 'include',
    mode: 'cors',
  });
  const user = await res.json();

  return user;
};

export const fetchAllUsers = async () => {
  const res = await fetch(`${URL}/users`);
  const userList = await res.json();

  return userList;
};

export const fetchUserById = async (id) => {
  const res = await fetch(`${URL}/users/${id}`);
  const user = await res.json();

  return user;
};

export const fetchUserArtists = async (id) => {
  const res = await fetch(`${URL}/artists/${id}`);
  const artistsArray = await res.json();

  return artistsArray;
};

export const postUserArtists = async (payload) => {
  const res = await fetch(`${URL}/artists/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      artistsArray: payload,
    }),
  });

  const body = await res.json();
  return body;
};

export const logout = async () => {
  // This route doesn't exist
  const data = await fetch(`${URL}/`).send({
    email: '',
    password: '',
  });
  return data.body;
};
