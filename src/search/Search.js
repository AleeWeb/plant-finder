import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card, CardBody, Row
} from 'reactstrap';

class Search extends Component {

  state = {
    data: [],
    searchResults: [],
  }

  componentDidMount() {
    fetch('https://data.sfgov.org/resource/vmnk-skih.json')
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
    let itemList = this.state.searchResults.map((item, id) => {

      return (

          <Card key={id}>

            <img src="https://via.placeholder.com/160x120.png" aria-hidden alt="Card image cap" />

            <CardBody>
                <p><strong>Plant Name:</strong> {item.common_name}</p>

                <p><strong>Plant Type:</strong> {item.plant_type}</p>
            
              {/*   <Button outline color="primary" href="wwww.google.com" target="_blank" rel="noopener noreferrer">Learn More</Button> */}
            </CardBody>
          </Card>

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
          {itemList}
        </Row>
      </div>

    )
  }
}

export default Search;