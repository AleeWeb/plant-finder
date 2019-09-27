import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
	return (  

<label className="search-label" htmlFor="search-input">
				<input
					type="text"
					name="search"
					id="search-input"
					placeholder="Search..."
				/>


				<FontAwesomeIcon icon="search" className="search-icon" />

			</label>


	);
}
 
export default Search;