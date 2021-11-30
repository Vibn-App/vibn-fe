const spotifyURL = 'https://api.spotify.com/v1/me/top';

const encodeBody = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const tokenRefresh = async (refresh_token) => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeBody({
      grant_type: 'refresh_token',
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      refresh_token
    })
  });

  const body = await res.json();
  localStorage.setItem('ACCESS_TOKEN', body.access_token);

  return body.access_token;
};

export const fetchTopArtists = async (token) => {
  const res = await fetch(`${spotifyURL}/artists`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (!data.items?.length) {
    await tokenRefresh(localStorage.getItem('REFRESH_TOKEN'));
  }

  return data.items;
};
