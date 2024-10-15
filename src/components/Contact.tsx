import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feel free to reach out to us!
      </p>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Input type='textarea'  id="message" name="message" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;