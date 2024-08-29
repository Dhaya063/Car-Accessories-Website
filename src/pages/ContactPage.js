import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import '../styles/pages/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validate fields
    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 3 seconds
      return;
    }

    setSuccessMessage('Message sent successfully!');
    setTimeout(() => setSuccessMessage(''), 10000); // Clear message after 3 seconds
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <Container className="contact-page" maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
            },
          }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          sx={{
            '& .MuiInputLabel-root': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
            },
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }}>
          Send
        </Button>
        {successMessage && (
          <Typography variant="body2" className="success-message">
            <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
            {successMessage}
          </Typography>
        )}
        {errorMessage && (
          <Typography variant="body2" className="error-message">
            {errorMessage}
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default ContactPage;
