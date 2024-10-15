import { useAuth } from '@/contexts/AuthContext';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const LoginModal: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const handleLogin = () => {
    login(username, password);
    toggle();
    
  }


  return (
    <div>
      <Button color="primary" onClick={toggle} className="ml-auto">
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog modal-dialog-end">
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" onChange={(e) => setUsername(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />   
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleLogin}>Ok</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;