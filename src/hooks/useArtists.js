import { useEffect, useState } from 'react';
import { fetchTopArtists } from '../services/spotifyAPI';

export default function useArtists(token) {
  const [artistsArray, setArtists] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchTopArtists(token)
      .then((artistArray) => setArtists(artistArray))
      .finally(() => setloading(false));
  }, []);

  return { artistsArray, loading };
}
