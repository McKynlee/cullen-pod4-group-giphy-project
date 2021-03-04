import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Search () {

  const dispatch = useDispatch();

  let [newSearch, setSearch] = useState();


  // will dispatch a request to get search results
  const searchButton = (event) => {
    event.preventDefault();
    console.log('searching!');
    dispatch({
      type: 'FETCH_GIF_SEARCH',
      payload: newSearch, 
    })
  }

  const handleChange = (userInput) => {
  console.log('handle it', userInput);
  setSearch(userInput);
  }
  

  return (
    <form>  
      <input 
        type="text"
        placeholder="Search for a GIF"
        onChange={() => handleChange(event.target.value)}
        value={newSearch}
      />
      <button onClick={searchButton}>Search</button>
    </form>  
  )
};

export default Search;