import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card, CardBody, Button, Row
} from 'reactstrap';

class Search extends Component {

  state = {
    data: [],
    searchResults: [],
  }

  componentDidMount () {
    fetch('https://data.sfgov.org/resource/vmnk-skih.json?$select=*')
      .then(response => response.json())
      .then(data => this.setState({data: data, searchResults: data}))
  }

  handleChange = (e) => {
    let searchKeyword = e.target.value;
    let searchResults = this.state.data.filter((eachItem) => {
      const isMatch = Object.values(eachItem).join(",").includes(searchKeyword);
      return isMatch; 
    });
    this.setState({searchResults})

    console.log(searchKeyword);  // print the characters of search query

   // console.log(searchResults); Prints the filtered results in an array of data
  }



  render () {
    let itemList = this.state.searchResults.map((item) => {
      return (
		
		<Card key={item.id}>

		<img src="https://via.placeholder.com/180x180.png" aria-hidden alt="Card image cap" />
		<CardBody>

		  <p><strong>Common Name:</strong> {item.common_name}</p>
      <p><strong>Plant Type:</strong> {item.plant_type}</p>
      <p><strong>Color:</strong> {item.flower_color}</p>
		  <p><strong>Bloom Time:</strong>  {item.bloom_time}</p>

		  <Button outline color="primary" href="wwww.google.com" target="_blank" rel="noopener noreferrer">Learn More</Button>

		</CardBody>
	  </Card>

	  );

    })
    return (
    <div>
      <h3>Search:</h3>

      <label className="search-label" htmlFor="search-input">
				<input
					type="text"
					name="search"
					id="search-input"
					placeholder="Search..."
					onChange={this.handleChange}
				/>
				<FontAwesomeIcon icon="search" className="search-icon" />

			</label>
      <Row>
       {itemList}
    </Row>
    </div>
    
    )
  }
}

export default Search;