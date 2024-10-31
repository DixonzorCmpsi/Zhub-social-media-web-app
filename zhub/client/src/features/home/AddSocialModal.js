// src/features/home/AddSocialModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddSocialModal = ({ addFeed }) => {
  const [show, setShow] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const handleAdd = () => {
    addFeed(selectedPlatform);
    setShow(false);
  };

  return (
    <>
      <Button variant="success" className="add-social-btn mt-4" onClick={() => setShow(true)}>
        + Add Social Media
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Social Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="form-select"
            onChange={(e) => setSelectedPlatform(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select a platform</option>
            <option value="YouTube">YouTube</option>
            <option value="Twitter">Twitter</option>
            <option value="TikTok">TikTok</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Button variant="primary" onClick={handleAdd} disabled={!selectedPlatform}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddSocialModal;
