import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link, Alert } from '@mui/material';
import '../styles/pages/RegisterPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle registration logic, such as sending data to a server.
    // For this example, we'll just simulate a successful registration.
    setRegistrationSuccess(true);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container className="register-page" maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Register
      </Typography>
      {registrationSuccess ? (
        <div className="success-message">
          <Alert severity="success" variant="filled">
            Registration successful! <Link href="/login" style={{ color: 'black', fontWeight: 800, fontSize: 14, marginLeft: 5}}>Login</Link>
          </Alert>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              style: { color: 'white' },
              notchedOutline: {
                borderColor: 'white',
              }
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
          <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
            Already a member? <Link href="/login" style={{ color: '#1e90ff' }}>Login</Link>
          </Typography>
        </form>
      )}
    </Container>
  );
};

export default RegisterPage;
