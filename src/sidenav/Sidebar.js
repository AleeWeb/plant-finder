import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SideBar = (props) => {
    return (
        <div className="side-bar">

        <Form>
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
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>


    
        </div>
    );
}

export default SideBar;