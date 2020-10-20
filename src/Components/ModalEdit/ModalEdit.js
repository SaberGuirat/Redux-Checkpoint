import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editTask } from "../../actions/actions";

function ModalEdit({ description }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Dispatch = useDispatch();
  const [newDescription, setNewDescription] = useState(description);
  const handlechange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleEditTask = () => {
    setShow(false);
    Dispatch(editTask({ description, newDescription }));
  };

  return (
    <>
      <FaUserEdit
        color="green"
        size="24px"
        style={{ margin: 10 }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Task Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newDescription} onChange={handlechange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
