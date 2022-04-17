import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

function NewTask({ title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} a task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>
              Assignee
            </Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Task name
            </Form.Label>
            <Form.Control type="name" placeholder="Enter name of task" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Select status
            </Form.Label>
            <Form.Select>
              <option>To Do</option>
              <option>In Progress</option>
              <option>In Testing</option>
              <option>Done</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Description
            </Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTask;
