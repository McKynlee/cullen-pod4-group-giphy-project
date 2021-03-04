import React from 'react';
import { useDispatch } from 'react-redux';

function Search () {

  const dispatch = useDispatch();


  // will dispatch a request to get search results
  const searchButton = (event) => {
    event.preventDefault();
    console.log('searching!');
  }

  return (
    <form>  
      <input 
        type="text"
        placeholder="Search for a GIF"
      />
      <button onClick={searchButton}>Search</button>
    </form>  
  )
};

export default Search;