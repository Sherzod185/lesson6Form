import React from 'react'

const Search = ({ onSearch, search }) => {
  return (
    <div>
      <input onChange={onSearch}
        className="pa3 b--green ba bg-lightest-blue"
        type="search"
        placeholder="Search robot ..."
      />
    </div>
  );
};

export default Search