import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Search() {

  const dispatch = useDispatch();

  let [newSearch, setSearch] = useState();


  // will dispatch a request to get search results
  const searchButton = (event) => {
    event.preventDefault();
    console.log('searching!');
    dispatch({
      type: 'CREATE_SEARCH',
      payload: newSearch,
    })
  }

  const handleChange = (userInput) => {
    console.log('handle it', userInput);
    setSearch(userInput);
  }

  // Bring in data from redux store to later render search results:
  let searchResults = useSelector(store => {
    return store.searchResults
  })

  console.log('looking for search', searchResults);

  return (
    <div>
    <form>
      <input
        type="text"
        placeholder="Search for a GIF"
        onChange={() => handleChange(event.target.value)}
        value={newSearch}
      />
      <button onClick={searchButton}>Search</button>
    </form>
    <div>
      {searchResults.map((giphy) => {
        return ( 
        <img src={giphy.images.fixed_height.url} 
        key={giphy.id} />
        )
      })}
      <button onClick={() => addFavorite(giphy)}>Favorite this!</button>
    </div>
    </div>

  )
};

export default Search;