import React, { Component } from 'react';
//import Tabs from './Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Images from './Images';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
      .then(data => this.setState({ data: data, searchResults: data }))
  }

  handleChange = (e) => {
    let searchKeyword = e.target.value;
    let searchResults = this.state.data.filter((eachItem) => {
      const matchCommonName = eachItem.common_name && eachItem.common_name.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchPlantType = eachItem.plant_type && eachItem.plant_type.toLowerCase().includes(searchKeyword.toLowerCase());
      //return isMatch;
      return matchCommonName || matchPlantType;
    });
    this.setState({ searchResults })

    //console.log(searchKeyword);  

    console.log(searchResults); //Prints the search bar filtered results in an array of data
  }
  render() {
    
    let plantList = this.state.searchResults.map(( plant, id ) => {
      return (

        <Flippy
          key={id}
          flipOnHover={true}
          flipDirection="horizontal"
          ref={(r) => this.flippy = r}
          style={{ width: '200px', height: 'auto', margin: '3px', marginBottom: '10px' }}
        >
          <FrontSide className="card">

      
         <img id={id} src={ Images[plant.common_name] && Images[plant.common_name].image} aria-hidden alt="Card image cap" style={{width:'100%', height:'120px'}}/>

            <div className="cardfront-wrap">

              <p><strong>Plant Name:</strong> {plant.common_name}</p>

              <p><strong>Plant Type:</strong> {plant.plant_type}</p>

            </div>

          </FrontSide>

          <BackSide
            style={{ backgroundColor: '#ffffff' }}>

            <div className="cardback-wrap">

              <p className="fact-txt"><FontAwesomeIcon icon="seedling" className="fact-icon" />
              <strong>{plant.common_name} Interesting Fact</strong>: {plant.additional_characteristices_notes}
              </p>

              <Button color="success" onClick={ () => this.toggle(plant) }>{this.props.buttonLabel}Learn More!</Button>

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

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

            <ModalBody>

              <button type="button" className="close" aria-label="Close" onClick={this.toggle}><span aria-hidden="true">×</span></button>
              <img src="https://cdn.dribbble.com/users/698871/screenshots/3971146/succulents-animation.gif" width="100%" aria-hidden alt="temporary animated gif" />
               
               {
                 this.state.currentModal ? (
                  <>
                    <p><strong>Common Name:</strong> {this.state.currentModal.common_name}</p>

                    <p><strong>Plant Type:</strong> {this.state.currentModal.plant_type}</p>

                    <p><strong>Native Type:</strong> {this.state.currentModal.climate_appropriate_plants}</p>
                   </>
                 ) : null
               }



            </ModalBody>
            <ModalFooter>

              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </Row>



      </div>
    )
  }
}

export default Search;