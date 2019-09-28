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
					onChange={this.onchange}
				/>
				<FontAwesomeIcon icon="search" className="search-icon" />

			</label>


	);
}
 
export default Search;