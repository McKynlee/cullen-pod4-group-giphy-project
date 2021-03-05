import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Favorites() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchFavorites();
  // }, []);

  // dispatch a request to get favorites
  const fetchFavorites = useSelector(store => {
    console.log('fetching favorites');
    return store.favoriteResults;
  })

  // Variable to capture selected value in dropdown:
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (userSelection) => {
    console.log('handleCategoryChange', userSelection);
    setSelectedCategory(userSelection);

    // send selected category to Saga:
    dispatch({
      type: 'CREATE_CATEGORY',
      payload: userSelection
    })
  }

  return (
    <>
      <h1>Your favorite GIFs!</h1>
        {/* selector for categories */}
        {/* will map through search results and render dropdown
        with each item */}
      <div>
        {fetchFavorites.map((image) => {
          return (
            <div> 
              <img src={image.giphy} key={image.id} />
              <select name="category"
                value={selectedCategory}
                id="category"
                onChange={(event) => handleCategoryChange(event.target.value)}>
                <option value="">Choose Category</option>
                <option value="1">Funny</option>
                <option value="2">Cohort</option>
                <option value="3">Cartoon</option>
                <option value="4">NSFW</option>
                <option value="5">Meme</option>
              </select>
            </div>
          )
        })}  
        </div>
    </>
  )
}

export default Favorites;