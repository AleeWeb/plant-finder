import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SideBar = (props) => {
  return (

    <div className="side-bar">

      <Form>

      {/* Plant Native radio circle filter */}
        <FormGroup tag="fieldset">
          <legend>Native</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="native" />{' '}
              San Francisco
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="native" />{' '}
              California
            </Label>
          </FormGroup>
        </FormGroup>
       {/* End of Plant Native radio circle filter */}


        {/* Start of checkbox filter option */}

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Data Option
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      {/* End of checkbox filter option */}


    </div>
  );
}

export default SideBar;