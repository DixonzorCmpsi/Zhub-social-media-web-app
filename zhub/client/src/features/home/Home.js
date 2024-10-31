// src/features/home/Home.js
import React, { useState } from 'react';
import { Button, Modal, Form, Navbar, Dropdown } from 'react-bootstrap';
import { FaBars, FaPlus } from 'react-icons/fa';
import './home.css';

const Home = () => {
  const [feeds, setFeeds] = useState([]); // Start with an empty array
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle adding a new social media feed
  const handleAddFeed = () => {
    // Placeholder login simulation
    const loginSuccessful = true;
    if (loginSuccessful) {
      setFeeds([...feeds, { platform: selectedPlatform, data: [`Recommended content from ${selectedPlatform}`] }]);
      setSelectedPlatform(''); // reset platform
      setShowModal(false); // close modal
    }
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="home-container p-5">
      {/* Navbar with hamburger menu */}
      <Navbar expand="lg" className="justify-content-between">
        <Navbar.Brand></Navbar.Brand>
        <Dropdown align="end">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <FaBars />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={toggleDarkMode}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Dropdown.Item>
            <Dropdown.Item href="#">Settings</Dropdown.Item>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      {/* Centered Welcome Message */}
      <div className="text-center mt-5">
        <h1>Your Hub Feed</h1>
      </div>

      {/* Feeds Section */}
      <div className="feeds-section mt-4">
        {feeds.length === 0 ? (
          <div className="text-center mt-5">
            <p>You have no social media feeds. Add one to get started!</p>
          </div>
        ) : (
          feeds.map((feed, index) => (
            <div key={index} className="feed-item mt-4 p-3 border rounded">
              <h3>{feed.platform} Feed</h3>
              {feed.data.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))
        )}
      </div>

      {/* Floating Plus Button to Add New Feed */}
      <Button
        className="add-feed-btn"
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        <FaPlus />
      </Button>

      {/* Modal for adding social media feed */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Social Media Feed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Select Platform</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setSelectedPlatform(e.target.value)}
              value={selectedPlatform}
            >
              <option value="" disabled>
                Choose a platform
              </option>
              <option value="YouTube">YouTube</option>
              <option value="Twitter">Twitter</option>
              <option value="TikTok">TikTok</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleAddFeed}
            disabled={!selectedPlatform}
          >
            Add Feed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
