import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Favorites () {

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
    </>
  )
}

export default Favorites;