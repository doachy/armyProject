import React from 'react';
import SearchContainer from 'routes/Search/SearchContainer.js';
import SearchInput from 'routes/Search/SearchInput.js';
import Homeworks from 'routes/Search/Homeworks.js';

function Search() {
	return (
		<>
			<SearchInput />
			<Homeworks />
		</>
	);
}

export default Search;