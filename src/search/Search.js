import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Images from './Images';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      searchResults: [],
      images: [],
      modal: false,
      currentModal: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(plantDetails) {
    this.setState(prevState => ({
      modal: !prevState.modal,
      currentModal: plantDetails
    }));
  }


  componentDidMount() {
    fetch('https://data.sfgov.org/resource/vmnk-skih.json?$select=*')
      .then(response => response.json())
      .then(data => this.setState({ data: data, searchResults: data, loading: false }))
  }

  handleChange = (e) => {
    let searchKeyword = e.target.value;
    let searchResults = this.state.data.filter((eachItem) => {
      const matchCommonName = eachItem.common_name && eachItem.common_name.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchPlantType = eachItem.plant_type && eachItem.plant_type.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchCommonName || matchPlantType;
    });
    this.setState({ searchResults })

    //console.log(searchKeyword);  

    // console.log(searchResults); Prints the search bar filtered results in an array of data
  }
  render() {

    let { loading } = this.state;

    let plantList = this.state.searchResults.map((plant, id) => {
      return (

        <Flippy
          key={id}
          flipOnHover={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r}
          style={{ width: '200px', height: 'auto', margin: '3px', marginBottom: '10px' }}
        >
          <FrontSide className="card">

            <img key={id} src={Images[plant.common_name] ? Images[plant.common_name].image : 'https://i.imgur.com/VRaN8uw.jpg'} aria-hidden alt="Plant image" style={{ width: '100%', height: '120px' }} />

            <div className="cardfront-wrap">

              <p><strong>Plant Name:</strong> {plant.common_name}</p>

              <p><strong>Plant Type:</strong> {plant.plant_type}</p>

            </div>

          </FrontSide>

          <BackSide
            style={{ backgroundColor: '#ffffff' }}>

            <div className="cardback-wrap">

              <p className="fact-txt"><FontAwesomeIcon icon="seedling" className="fact-icon" />
                <strong>{plant.common_name} Interesting Facts</strong>: {plant.additional_characteristices_notes}
              </p>

              <Button color="success" onClick={() => this.toggle(plant)}>{this.props.buttonLabel}Learn More!</Button>

            </div>
          </BackSide>
        </Flippy>
      );
    })

    return (
      <div className="search-wrap">

        {/* Search Filter */}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search for Plants here..."
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon="search" className="search-icon" />
        </label>
        {/* End of Search Filter */}

        <Row>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

            <ModalBody>

              <button type="button" className="close" aria-label="Close" onClick={this.toggle}><span aria-hidden="true">×</span></button>
           
              {
                this.state.currentModal ? (

                  <>

          <img src={Images[this.state.currentModal.common_name] ? Images[this.state.currentModal.common_name].image : 'https://i.imgur.com/VRaN8uw.jpg'} aria-hidden alt="Plant image" style={{ width: '100%', height: 'auto', marginBottom: "10px",  marginTop: "10px"  }} />
                    
                      <ul>
                      <li><strong>Latin Name:</strong> {this.state.currentModal.latin_name}</li>
                      <li><strong>Common Name:</strong> {this.state.currentModal.common_name}</li>
                      <li><strong>Family Name:</strong> {this.state.currentModal.family_name}</li>
                      <li><strong>Native Type:</strong> {this.state.currentModal.climate_appropriate_plants}</li>
                      <li><strong>Bloom Time:</strong> {this.state.currentModal.bloom_time}</li>
                      <li><strong>Full Grown Size:</strong> {this.state.currentModal.size_at_maturity}</li>

                      <li><strong>Description:</strong> This {this.state.currentModal.climate_appropriate_plants} and {this.state.currentModal.plant_type} requires
                  the best condtions that are {this.state.currentModal.suitable_site_conditions} with water needs that are {this.state.currentModal.water_needs}.
                  The appropriate location for this plant is {this.state.currentModal.appropriate_location} and the common communities are
                  {this.state.currentModal.plant_communities}.</li>
                    </ul>
                    </>
                   
                ) : null
              }
            

            </ModalBody>
            
        
            <ModalFooter>

              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </Row>


        <Row>
          {loading ? <h2 className="main-headline" style={{ margin: "0 auto", marginBottom: "20px" }}> <FontAwesomeIcon icon="spa" />Loading...</h2> : plantList}
        </Row>


      </div>
    )
  }
}

export default Search;