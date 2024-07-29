import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import '../styles/pages/RegisterPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <Container className="register-page" maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
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
            style: { color: 'white' },
            notchedOutline: {
              borderColor: 'white',
            }
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
            style: { color: 'white' },
            notchedOutline: {
              borderColor: 'white',
            }
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
        <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
          Already a member? <Link href="/login" style={{ color: '#1e90ff' }}>Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default RegisterPage;
