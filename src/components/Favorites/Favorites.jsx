import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Favorites() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchFavorites();
  }, []);

  // dispatch a request to get favorites
  const fetchFavorites = () => {
    console.log('fetching favorites');
  }

  return (
    <>
      <h1>Your favorite GIFs!</h1>
      {/* selector for categories */}
      {/* will map through search results and render dropdown
      with each item */}
      <select>
        <option value="">Choose Category</option>
        <option value="funny">Funny</option>
        <option value="cohort">Cohort</option>
        <option value="cartoon">Cartoon</option>
        <option value="nsfw">NSFW</option>
        <option value="meme">Meme</option>
      </select>
    </>
  )
}

export default Favorites;