import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card, CardBody, Button
} from 'reactstrap';

const DataGrid = (props) => {
  const [plant, setplant] = useState();

 useEffect(() => {

  const data = "https://data.sfgov.org/resource/vmnk-skih.json";
  
    axios
   .get(data)
   .then(({ data }) => setplant(data));
   console.log(data);
   });

  return plant ? (
    < >
      {plant.map((plants, i) => {

        return (

          <Card key={i}>

            <img src="https://via.placeholder.com/180x180.png" aria-hidden alt="Card image cap" />
            <CardBody>

              <p><strong>Plant Name:</strong> {plant[i].common_name}</p>
              <p><strong>Plant Type:</strong> {plant[i].plant_type}</p>

              <Button outline color="primary" href="www.google.com" target="_blank">Learn More</Button>

            </CardBody>
          </Card>

        );
      })}
    </>
  ) : (
    <div>Loading...</div>
    );
};


export default DataGrid;
