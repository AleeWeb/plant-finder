import React, { Component } from 'react';
import Tabs from './Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button, Row
} from 'reactstrap';

import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Search extends Component {

  state = {
    data: [],
    searchResults: [],
  }

  componentDidMount() {
    fetch('https://data.sfgov.org/resource/vmnk-skih.json?$select=*')
      .then(response => response.json())
      .then(data => this.setState({ data: data, searchResults: data }))
  }

  handleChange = (e) => {
    let searchKeyword = e.target.value;
    let searchResults = this.state.data.filter((eachItem) => {
      const isMatch = Object.values(eachItem).join(",").includes(searchKeyword);
      return isMatch;
    });
    this.setState({ searchResults })

    //console.log(searchKeyword);  

    // console.log(searchResults); Prints the filtered results in an array of data
  }


  render() {

    let plantList = this.state.searchResults.map((plant, id) => {

      return (

        <Flippy
          key={id}
          flipOnHover={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r} 
          style={{ width: '200px', height: 'auto', margin: '3px', marginBottom: '10px' }}
        //    style={{ width: '250px', height: 'auto', margin: '5px' }} 
        >
          <FrontSide className="card">

            <img src="https://via.placeholder.com/160x120.png" aria-hidden alt="Card image cap" />

            <div className="cardfront-wrap">

              <p><strong>Plant Name:</strong> {plant.common_name}</p>

              <p><strong>Plant Type:</strong> {plant.plant_type}</p>

            </div>

          </FrontSide>
          <BackSide
            style={{ backgroundColor: '#ffffff' }}>

          <div className="cardback-wrap">
        
            <p><strong>Interesting Fact</strong>: {plant.common_name} {plant.additional_characteristices_notes}</p>
            
            <Button outline color="primary" href="www.google.com" target="_blank">Learn More</Button>

            </div>
          </BackSide>
        </Flippy>


      );

    })
    return (
      <div>

        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search here..."
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon="search" className="search-icon" />
        </label>

        <Row>
          {plantList}
        </Row>

        <Row>
          <Tabs />
        </Row>


      </div>

    )
  }
}

export default Search;