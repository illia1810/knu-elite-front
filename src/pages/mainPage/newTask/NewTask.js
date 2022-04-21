import React, { useState, useContext, useEffect } from "react";
import { URL, MyContext } from "../../../global";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

function NewTask({ title, modalShown }) {
  const { setReload, userInfo } = useContext(MyContext);
  const [show, setShow] = useState(modalShown);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskEstimation, setTaskEstimation] = useState("");
  const [assignee, setAssignee] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL + `/api/user/list`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
        console.log("Успех:", result);
      })
      .catch((error) => {
        console.log("Ошибка:", error);
      });
  }, []);

  const handleClose = () => setShow(false);

  const createNewTask = () => {
    if (
      taskTitle &&
      taskDescription &&
      taskEstimation &&
      taskStatus &&
      assignee
    ) {
      fetch(URL + `/api/task`, {
        method: "POST",
        body: JSON.stringify({
          title: taskTitle,
          description: taskDescription,
          loggedTime: "",
          estimatedTime: taskEstimation,
          typeId: "31", // default - Task
          statusId: taskStatus,
          projectId: "1", //default - Project 1
          reporterId: userInfo.id,
          assigneeId: assignee,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setShow(false);
          setReload("b");
          console.log("Успех:", result);
        })
        .catch((error) => console.log("Ошибка:", error));
    } else {
      alert("Please input all fields");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} a task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Assignee</Form.Label>
            <Form.Select onChange={({ target }) => setAssignee(target.value)}>
              {users.map((item) => (
                <option value={item.value.id}>{item.value.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Task name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name of task"
              onChange={({ target }) => setTaskTitle(target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Original Estimate</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter time estimation"
              onChange={({ target }) => setTaskEstimation(target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select status</Form.Label>
            <Form.Select onChange={({ target }) => setTaskStatus(target.value)}>
              <option value="1">To Do</option>
              <option value="11">In Progress</option>
              <option value="31">In Testing</option>
              <option value="41">Done</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              onChange={({ target }) => setTaskDescription(target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={createNewTask}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTask;
