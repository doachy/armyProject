import React from 'react';
import SearchContainer from 'routes/Search/SearchContainer.js';
import SearchInput from 'routes/Search/SearchInput.js';

function Search() {
	return (
		<>
			<SearchInput />
			<SearchContainer />
		</>
	);
}

export default Search;