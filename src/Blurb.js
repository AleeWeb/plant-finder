import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Blurb() {
    return (
        <div className="blurb-wrap">
           
          <h2 className="main-headline"> <FontAwesomeIcon icon="spa" /> Plant Finder</h2>
            <h4  className="sub-headline">Resource for Gardeners, Designers, Ecologists.</h4>

            <p className="blurb-description">Plant Finder is a resource for gardeners, designers, ecologists and others interested in 
                greening neighborhoods, enhancing our urban ecology and surviving the drought. The Plant Finder 
                recommends appropriate plants for sidewalks, private backyards and roofs that are adapted to San Francisco's 
                unique environment, climate and habitats.
            </p>

            <p className="main-headline" style={{marginTop: "15px"}}><strong>You can search by types: Tree, Shrub, Perennial 
                and also the Plant Name!</strong></p>

        <hr />

        </div>
    )
}

export default Blurb;