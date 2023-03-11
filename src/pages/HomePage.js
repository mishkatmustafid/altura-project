import React, { useState } from "react";
import "../styles/Home.css";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(searchValue);
  };
  return (
    <div className='home'>
      <h1 className='home__title'>Welcome to the Marketplace</h1>
      <p className='home__description'>
        This platform is here for you to facilitate your acquisition of NFTs.
        You can look for NFTs under an address very easily just by pasting the
        address below. Then click the search button and the world will open up
        to you.
      </p>
      <div className='home__search'>
        <input
          type='text'
          placeholder='0x3afDC40124.....'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className='home__button' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default HomePage;
